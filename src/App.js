import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
     stars1I: [],
     stars2I: [],
     stars3I: [],
     stars4I: [],
     stars5I: [],
     stars6I: [],

     stars1G: [],
     stars2G: [],
     stars3G: [],
     stars4G: [],
     stars5G: [],
     stars6G: [],
     stars7G: [],
     stars8G: [],
     
     stars1V: [],
     stars2V: [],
     stars3V: [],
     stars4V: [],
     
     stars1M: [],
     stars2M: [],
     stars3M: [],
     stars4M: [],
     
     rating1I: 6,
     rating2I: 6,
     rating3I: 6,
     rating4I: 6,
     rating5I: 6,
     rating6I: 6,
     
     rating1G: 6,
     rating2G: 6,
     rating3G: 6,
     rating4G: 6,
     rating5G: 6,
     rating6G: 6,
     rating7G: 6,
     rating8G: 6,

     rating1V: 6,
     rating2V: 6,
     rating3V: 6,
     rating4V: 6,
     
     rating1M: 6,
     rating2M: 6,
     rating3M: 6,
     rating4M: 6,
     
     Name_soft:'',
    }

this.onChangeRating = this.onChangeRating.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  
  onChangeRating(e){
    //console.log(e.target.value)
    //console.log(e.target.name)
     if(e.target.name==='select1'){
       if(e.target.value!==6 ){
         this.setState({
           rating1I: parseInt(e.target.value),
           stars1I: Array(parseInt(e.target.value)).fill(1)});
       }
     }
     if(e.target.name==='select2'){
      if(e.target.value!==6 ){
        this.setState({
          rating2I: parseInt(e.target.value),
          stars2I: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select3'){
      if(e.target.value!==6 ){
        this.setState({
          rating3I: parseInt(e.target.value),
          stars3I: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select4'){
      if(e.target.value!==6 ){
        this.setState({
          rating4I: parseInt(e.target.value),
          stars4I: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select5'){
      if(e.target.value!==6 ){
        this.setState({
          rating5I: parseInt(e.target.value),
          stars5I: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select6'){
      if(e.target.value!==6 ){
        this.setState({
          rating6I: parseInt(e.target.value),
          stars6I: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select7'){
      if(e.target.value!==6 ){
        this.setState({
          rating1G: parseInt(e.target.value),
          stars1G: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select8'){
      if(e.target.value!==6 ){
        this.setState({
          rating2G: parseInt(e.target.value),
          stars2G: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select9'){
      if(e.target.value!==6 ){
        this.setState({
          rating3G: parseInt(e.target.value),
          stars3G: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select10'){
      if(e.target.value!==6 ){
        this.setState({
          rating4G: parseInt(e.target.value),
          stars4G: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select11'){
      if(e.target.value!==6 ){
        this.setState({
          rating5G: parseInt(e.target.value),
          stars5G: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select12'){
      if(e.target.value!==6 ){
        this.setState({
          rating6G: parseInt(e.target.value),
          stars6G: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select13'){
      if(e.target.value!==6 ){
        this.setState({
          rating7G: parseInt(e.target.value),
          stars7G: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select14'){
      if(e.target.value!==6 ){
        this.setState({
          rating8G: parseInt(e.target.value),
          stars8G: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select15'){
      if(e.target.value!==6 ){
        this.setState({
          rating1V: parseInt(e.target.value),
          stars1V: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select16'){
      if(e.target.value!==6 ){
        this.setState({
          rating2V: parseInt(e.target.value),
          stars2V: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select17'){
      if(e.target.value!==6 ){
        this.setState({
          rating3V: parseInt(e.target.value),
          stars3V: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select18'){
      if(e.target.value!==6 ){
        this.setState({
          rating4V: parseInt(e.target.value),
          stars4V: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select19'){
      if(e.target.value!==6 ){
        this.setState({
          rating1M: parseInt(e.target.value),
          stars1M: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select20'){
      if(e.target.value!==6 ){
        this.setState({
          rating2M: parseInt(e.target.value),
          stars2M: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select21'){
      if(e.target.value!==6 ){
        this.setState({
          rating3M: parseInt(e.target.value),
          stars3M: Array(parseInt(e.target.value)).fill(1)});
      }
    }
    if(e.target.name==='select22'){
      if(e.target.value!==6 ){
        this.setState({
          rating4M: parseInt(e.target.value),
          stars4M: Array(parseInt(e.target.value)).fill(1)});
      }
    }
  }

  handleSubmit(e) {   
    e.preventDefault();
    const promedioI = (this.state.rating1I + this.state.rating2I + this.state.rating3I+ this.state.rating4I+ this.state.rating5I + this.state.rating6I)/6
    const promedioG = (this.state.rating1G + this.state.rating2G + this.state.rating3G+ this.state.rating4G+ this.state.rating5G + this.state.rating6G + this.state.rating7G+ this.state.rating8G)/8
    const promedioV = (this.state.rating1V + this.state.rating2V + this.state.rating3V+ this.state.rating4V)/4
    const promedioM = (this.state.rating1M + this.state.rating2M + this.state.rating3M+ this.state.rating4M)/4
    const Name_soft1 = this.state.Name_soft 
    if ((promedioI&&promedioG&&promedioV&&promedioM) <= 5)
     { 
      swal("Software:"+Name_soft1," Rating por criterio: \nInstalación: "+promedioI+" Estrellas \n Interfaz Grafica: "+promedioG
  +" Estrellas \n Versatilidad: "+promedioV+" Estrellas \n Motivación: "+promedioM+" Estrellas","success");
     }
     else
     { 
      swal("", "Completar Formulario", "error")
    }
  }

  render(){

    const Name_soft = this.state.Name_soft

    return (
      <div className="app">
        <h1 class="text-center">MODELO DE EVALUACION FERMINA 2023</h1>
        <p></p>
        <h2 class="text-center">INSTRUMENTO DE EVALUACION PARA EVALUAR LA CALIDAD DE UN SOFTWARE</h2>
        <p></p>
        <p></p>

          <form>
          
          <p></p>
          <p>Los criterios serán evaluados teniendo en cuenta características
que corresponde teniendo a considerar la siguiente escala o métrica
de puntuación. 
<br></br>

El software no cumple con los requisitos
de evaluación. (1)<br></br>
El software cumple con los requisitos
mínimos para ser evaluado, pero debe mejorarse. (3)<br></br>
El software
cumple satisfactoriamente con todos los requisitos para ser validado.
(5)<br></br>
<br></br>
Al final se obtendrá un puntaje total que se obtiene
de la sumatoria de los puntajes parciales que obtuvieron cada
categoría con la finalidad de determinar la calidad del software.</p>


<div>NOMBRE DEL SOFTWARE:<textarea name="namesoft" value={Name_soft} onChange={(e) => this.setState({ Name_soft: e.target.value })}></textarea></div>


            <div><p><label ><h3 class="text-center">Criterio: Instalación</h3></label> </p>
              <li>                  
                  <label > 1. El software se instala desde un ejecutable:
                    <select name="select1"  value={this.state.rating1I} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                  </label>
                  {this.state.stars1I.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
              </li>      
               <li>        
                    <label > 2. El software tiene el idioma universal (Ingles) además de escoger el idioma que se desee.
                      <select name="select2"  value={this.state.rating2I} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars2I.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li>   
               <li>        
                    <label > 3. El software cuenta con una guía de paso a paso para la instalación.
                      <select name="select3"  value={this.state.rating3I} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars3I.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li>  
               <li>        
                    <label > 4. El software se instala en los diferentes sistemas operativos (Windows, Linux, Mac, Android)
                      <select name="select4"  value={this.state.rating4I} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars4I.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li>  
               <li>        
                    <label > 5. Cuenta con los requerimientos mínimos de hardware para su instalación.
                      <select name="select5"  value={this.state.rating5I} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars5I.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li>  
               <li>        
                    <label >6. Se puede ejecutar desde un disco duro o una memoria sin instalación.
                      <select name="select6"  value={this.state.rating6I} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars6I.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li>  

            </div>

            <div> <p></p><p><label ><h3 class="text-center">Criterio: Interfaz Grafica</h3></label> </p>

               <li>        
                    <label >1. Dispone de un menú intuitivo para niños, jóvenes, adultos.
                      <select name="select7"  value={this.state.rating1G} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars1G.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li> 

               <li>        
                    <label >2. Cuenta con gadget animado que indican el estado del estudiante y su perfil.
                      <select name="select8"  value={this.state.rating2G} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars2G.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li>  

               <li>        
                    <label >3. Consta con Alertas (varios sonidos animados) Indicativos
                      <select name="select9"  value={this.state.rating3G} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars3G.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li> 

               <li>        
                    <label >4. Contiene una barra de menú con la cual se pueda interactuar y configurar.
                      <select name="select10"  value={this.state.rating4G} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars4G.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li> 

               <li>        
                    <label >5. El software requiere el uso de Mouse (Ratón)
                      <select name="select11"  value={this.state.rating5G} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars5G.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li> 

               <li>        
                    <label >6. El software utiliza mas hardware además del mouse y teclado como gafas de realidad virtual 3D o tablero digital.
                      <select name="select12"  value={this.state.rating6G} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars6G.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li> 

               <li>        
                    <label >7. El software está basado para plataforma multimedia.
                      <select name="select13"  value={this.state.rating7G} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars7G.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li> 

               <li>        
                    <label >8. La interfaz es amigable con el usuario (fácil en su uso).
                      <select name="select14"  value={this.state.rating8G} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars8G.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li> 

            </div>

            <div> <p></p><p><label ><h3 class="text-center">Criterio: Versatilidad</h3></label> </p>
                        
               <li>        
                    <label >1. Puede utilizarse para trabajar de forma individual, en grupo o en competencias
                      <select name="select15"  value={this.state.rating1V} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars1V.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li> 

               <li>        
                    <label >2. Se puede ajustar a parámetros de niveles de dificultad.
                      <select name="select16"  value={this.state.rating2V} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars2V.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li> 

               <li>        
                    <label >3. Son abiertos para permitir ser modificable fácilmente.
                      <select name="select17"  value={this.state.rating3V} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars3V.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li> 

               <li>        
                    <label >4. Puede facilitar la impresión de contenidos.
                      <select name="select18"  value={this.state.rating4V} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                    {this.state.stars4V.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
               </li> 
            </div>

            <div> <p></p><p><label ><h3 class="text-center">Criterio: Motivación</h3></label></p>   
                        <li>        
                             <label >1. Se puede facilitar el logro de los objetivos
                               <select name="select19"  value={this.state.rating1M} onChange={this.onChangeRating}>
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                               </select>
                             </label>
                             {this.state.stars1M.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
                        </li> 
         
                        <li>        
                             <label >2. Se adecuá a los contenidos y a los destinatarios
                               <select name="select20"  value={this.state.rating2M} onChange={this.onChangeRating}>
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                               </select>
                             </label>
                             {this.state.stars2M.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
                        </li> 
         
                        <li>        
                             <label >3. Cuenta con colores y animaciones atractivas para el usuario.
                               <select name="select21"  value={this.state.rating3M} onChange={this.onChangeRating}>
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                               </select>
                             </label>
                             {this.state.stars3M.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
                        </li> 
         
                        <li>        
                             <label >4. Fomenta el auto aprendizaje
                               <select name="select22"  value={this.state.rating4M} onChange={this.onChangeRating}>
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                               </select>
                             </label>
                             {this.state.stars4M.map(x =><img alt='estrella' src='img/star.png' width='32' />)}
                        </li> 
         
            </div>

            <p></p>

            <input type="submit" value="Rating" onClick={this.handleSubmit}/>
          
            <p></p>

          </form>

      </div>
    );
  }
}

export default App;
