import React, {Component} from 'react'
import './Notifications.styles.css'
import Data from '../Data/Data.js'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Select from 'react-select';
import * as emailjs from 'emailjs-com'
//import pathString from './../../get_php_link.js'
import axios from 'axios';

const options = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' }
]

export default class Notifications extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            row:[],
            Mesaj:'',
            Priority:'',
            Numar_inregistrari: 0
        }
    }

    /*sendAdresa = () => {
        var headers ={
            'Content-Type':'application/json'
        }
        var payload = new FormData();
        payload.append('Adresa',this.state.Adresa);
        payload.append('Continut',this.state.Continut);
        axios.post('http://localhost:81/Nokia/sendAdresa.php',payload).then(res=>{
            this.setState({data:res.data});
        })
    }*/
    getNotificari = () => {
        axios({method:'get', url:'http://localhost:81/Nokia/afiseaza_notificare.php'}).then(res=>{
            this.setState({data:res.data});
        });
    }


    sendEmail = (e) => {
    e.preventDefault();
    //TRIMITE MAIL

    /*emailjs.sendForm('service_xrr0vpi', 'template_939alku', e.target, 'user_fW70iSUnkx1lopmIJzfgx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });*/

        //INTRODUCEM TICKETUL IN TABELA TICKETE
        var headers ={
            'Content-Type':'application/json'
        }
        var payload = new FormData();
        payload.append('Priority',this.state.Priority);
        axios.post('http://localhost:81/Nokia/introduce.php',payload).then(res=>{
            this.setState({data:res.data});
        });

        //INTRODUCEM TICKET CA SI NOTIFICARE IN TABELA NOTIFICARI
        var headers ={
            'Content-Type':'application/json'
        }
        var payload = new FormData();
        payload.append('Mesaj',this.state.Mesaj);
        axios.post('http://localhost:81/Nokia/adauga_notificare.php',payload).then(res=>{
            this.setState({data:res.data});
        });

        //APARE NOTIFICARE
        if (this.state.Priority == 0)
        {
            store.addNotification({
            title: "Avertisment",
            message: "S-a adaugat un ticket de prioritate 0",
            type: 'danger',
            container: 'top-right',
            insert: 'bottom',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "zoomOut"],
          
            dismiss: {
                duration: 3000,
                showIcon:true,
            }
            })
        }
        else if (this.state.Priority == 1)
        {
            store.addNotification({
            title: "Avertisment",
            message: "S-a adaugat un ticket de prioritate 1",
            type: 'warning',
            container: 'top-right',
            insert: 'bottom',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "zoomOut"],
          
            dismiss: {
                duration: 3000,
                showIcon:true,
            }
            })
        }
        else if (this.state.Priority == 2)
        {
            store.addNotification({
            title: "Avertisment",
            message: "S-a adaugat un ticket de prioritate 2",
            type: 'info',
            container: 'top-right',
            insert: 'bottom',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "zoomOut"],
          
            dismiss: {
                duration: 3000,
                showIcon:true,
            }
            })
        }
        else if (this.state.Priority == 3)
        {
            store.addNotification({
            title: "Avertisment",
            message: "S-a adaugat un ticket de prioritate 3",
            type: 'info',
            container: 'top-right',
            insert: 'bottom',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "zoomOut"],
          
            dismiss: {
                duration: 3000,
                showIcon:true,
            }
            })
        }
   }
  

    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'success':
                    store.addNotification({
                        title: "Verificat",
                        message: "Mesaj de succes",
                        type: 'success',
                        container: 'top-right',
                        insert: 'bottom',
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "zoomOut"],
                      
                        dismiss: {
                            duration: 3000,
                            showIcon:true,
                        }
                    })
                    break;
                case 'warning':
                    store.addNotification({
                        title: "Atentie",
                        message: "Mesaj de atentionare",
                        type: 'warning',
                        container: 'top-right',
                        insert: 'bottom',
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "zoomOut"],
                      
                        dismiss: {
                            duration: 3000,
                            showIcon: true,
                        }
                    })
                    break;
                case 'danger':
                    store.addNotification({
                        title: "Eroare",
                        message: "Mesaj de atentionare",
                        type: 'danger',
                        container: 'top-right',
                        insert: 'bottom',
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "zoomOut"],
                      
                        dismiss: {
                            duration: 3000,
                            showIcon:true,
                        }
                    })
                    break;
            }
        } 
    }
    componentDidMount()
    {

        axios.get('http://localhost:81/Nokia/afiseaza_notificare.php')
          .then( response =>{
            console.log(response);
            this.setState({row:response.data});
          })
          .catch(function (error) {
          console.log(error);
          })
          .then(function () {

          });
        
    }
    /*componentDidMount(){
        axios({
            method:'get',
            url:'http://localhost:81/Nokia/numar_inregistrari.php'
        })
        .then(res => this.setState({Numar_inregistrari:res.data}));

        setInterval(function(){
            var d = new Date();
            if ((d.getTime() - 10800000) > 5000 )
            {
                store.addNotification({
                    title: "Eroare",
                    message: "Mesaj de atentionare",
                    type: 'danger',
                    container: 'top-right',
                    insert: 'bottom',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "zoomOut"],
                  
                    dismiss: {
                        duration: 3000,
                        showIcon:true,
                    }
                })
            }
        },5000);
            //var d = new Date();
            //alert (d.getTime()- 10800000);
            //alert (this.state.Numar_inregistrari);
    }*/

    render() 
    {

        return (
            <React.Fragment>
            <div className = "notifications-container">
                <h1 className="notifications-header">Notificari</h1>
                {this.state.row.map(datum=>  
                    <div className="notification-item">
                        {datum.MESAJ}
                    </div>
                )}
                
                <div className = "butoane-container">

                    <form className="contact-form" onSubmit={this.sendEmail.bind(this)}>
                        <label>Nivel de prioritate</label>
                        <Select name = "nivel"  placeholder = {""} onChange = {(p)=> {this.setState({Priority:p.value}); this.setState({Mesaj:'A fost creat un ticket nou de prioritate ' + p.value })}} options={options} />

                        <button>Send Ticket</button>
                    </form>
               </div>
            </div>
            </React.Fragment>
        )
    }
}
