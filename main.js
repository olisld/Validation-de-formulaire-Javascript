/**
 * @property {HTMLElementForm} form
 */
class RegisterValidation {
  constructor() {
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.form = document.querySelector("#form");
    

    if (this.form) {
      this.form.addEventListener("submit", this.handleSubmit);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.nom =  document.querySelector('input[name="name"]').value
    this.email = document.querySelector('input[name="email"]').value
    this.MDP = document.querySelector('input[name="password"]').value
    this.ConfirmationMDP = document.querySelector('input[name="confirm_password"]').value
    
    console.log("submit !");

    this.validationformulaire(this.nom,this.email,this.MDP,this.ConfirmationMDP)
    // Code
  }

  validationnom(nom) {
    if(this.isnotempty(nom) && 
       this.caracternumberiscorrect(nom,2)
      ){
      // console.log('reussit nom')
      return true
    }
    else{
      return false
    }
  }

  validationadresseemail(email){
    if(this.isnotempty(email) &&
       this.isValidEmail(email)
      ){
      // console.log('reussit email')
      return true
    }
    else{
      return false
    }
  }

  validationmotdepasse(MDP){
    if(this.isnotempty(MDP) && 
       this.caracternumberiscorrect(MDP,6)
      ){
      // console.log('reussit MDP')
      return true
    }
    else{
      return false
    }
  }

  validationconfirmationdemotdepasse(ConfirmationMDP,MDP){
    if(this.isnotempty(ConfirmationMDP) && 
       ConfirmationMDP === MDP 
      ){
        // console.log('reussit confirmation de MDP')
        return true
    }
    else{
      return false
    }
  }

  isnotempty(value){
    return value!='' 
  }

  caracternumberiscorrect(value,number){
      return value.length>=number
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      return true
    }
  }

  validationformulaire(nom,email,MDP,ConfirmationMDP){
    if(this.validationnom(nom) &&
        
       this.validationadresseemail(email) &&
  
       this.validationmotdepasse(MDP) &&

       this.validationconfirmationdemotdepasse(ConfirmationMDP,MDP)
      ){
        console.log('formulaire valide')
        console.log('nom: ',nom)
        console.log('email: ',email)
        console.log('Password: ',MDP)
        console.log('Confirm Password: ',ConfirmationMDP)
      }

    else if(this.validationnom(nom) === false){
      console.log('Le nom ne respecte pas les prérequis qui sont minimum deux lettres')
    }

    else if(this.validationadresseemail(email) === false){
      console.log("L'email n'est pas valide")
    }

    else if(this.validationmotdepasse(MDP) === false){
      console.log("Le mot de passe ne respecte pas les prérequis qui sont minimum six lettres")
    }

    else if(this.validationconfirmationdemotdepasse(ConfirmationMDP,MDP) === false){
      console.log("Le confirmation du mot de passe ne correspond pas avec le mot de passe")
  }
  }
}
new RegisterValidation();
