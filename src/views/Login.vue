<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{ invalid: v$.email.$error }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-for="error of v$.email.$errors"
          :key="error"
          >{{ printErrorEmail(error.$validator) }}</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{ invalid: v$.password.$error }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-for="error of v$.password.$errors"
          :key="error"
          >{{ printErrorPassword(error.$validator, error.$params.min) }}</small
        >
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";
export default {
  name: "login",
  data: () => ({
    v$: useVuelidate(),
    email: "",
    password: "",
  }),
  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(6) },
    };
  },
  methods: {
    submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      const formData={
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$router.push("/");
    },
    printErrorEmail($name) {
      if ($name === "required") {
        return "Поле не должно быть пустым";
      } else if ($name === "email") {
        return "Ввеите корректныи Email";
      }
    },
    printErrorPassword($name, $param) {
      if ($name === "required") {
        return "Введите пароль";
      } else if ($name === "minLength") {
        return "Минимальная длина должна быть " + $param + " символов";
      }
    },
  },
};
</script>
