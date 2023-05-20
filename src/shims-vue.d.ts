declare module "*.vue" {
  declare module "vue/types/vue" {
    interface Vue {}
  }
  export default Vue;
}
