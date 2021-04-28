import React, {Component} from 'react'
import './Notifications.styles.css'
import Data from '../Data/Data.js'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import * as emailjs from 'emailjs-com'
//import pathString from './../../get_php_link.js'
import axios from 'axios'

export default class Notifications extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            Adresa:'',
            Continut:'',
            Number:'',
            Status:'',
            Priority:'',
            Numar_inregistrari: 0
        }
    }

    sendTicket = (e) => {
        e.preventDefault();
        var headers ={
            'Content-Type':'application/json'
        }
        var payload = new FormData();
        payload.append('Number',this.state.Number);
        payload.append('Status',this.state.Status);
        payload.append('Priority',this.state.Priority);
        axios.post('http://localhost:81/Nokia/introduce.php',payload).then(res=>{
            this.setState({data:res.data});
        });
        if (this.state.Priority == 1)
        {
            store.addNotification({
            title: "Avertisment",
            message: "S-a adaugat un ticket de prioritate 1",
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
        else if (this.state.Priority == 2)
        {
            store.addNotification({
            title: "Avertisment",
            message: "S-a adaugat un ticket de prioritate 2",
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
        else if (this.state.Priority == 3)
        {
            store.addNotification({
            title: "Avertisment",
            message: "S-a adaugat un ticket de prioritate 3",
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
        }
    }
    sendAdresa = () => {
        var headers ={
            'Content-Type':'application/json'
        }
        var payload = new FormData();
        payload.append('Adresa',this.state.Adresa);
        payload.append('Continut',this.state.Continut);
        axios.post('http://localhost:81/Nokia/sendAdresa.php',payload).then(res=>{
            this.setState({data:res.data});
        })
    }
    sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xrr0vpi', 'template_939alku', e.target, 'user_fW70iSUnkx1lopmIJzfgx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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

    render() {
        const notificari = Data.map((Data) =>
            <div className="notification-item">
                {Data.content}
            </div>
        );

        return (
            <div className = "notifications-container">
                <h1 className="notifications-header">Notificari</h1>
                {notificari}
                <div className = "butoane-container">
					
                <button className = "adauga-notificare" onClick = {this.createNotification('success')}>Adauga confirmare</button>
                <button className = "adauga-notificare"  onClick={this.createNotification('warning')}>Adauga atentionare</button>
                <button className = "adauga-notificare"  onClick = {this.createNotification('danger')}>Adauga eroare</button>
                   
                    <form className="contact-form" onSubmit={this.sendEmail.bind(this)}>
                        <label>Email</label>
                        <input type="text" name="Adresa" onChange={(p)=>this.setState({Adresa:p.target.value})} value = {this.state.Adresa} />
                        <label>Message</label>
                        <input type="text" name="Continut" onChange = {(p) => this.setState ({Continut :p.target.value})} value = {this.state.Continut} />
                        

                        <button onClick = {this.sendAdresa}>Send</button>
                    </form>

                    <form className="contact-form" onSubmit={this.sendEmail.bind(this)}>
                        <label>Number</label>
                        <input type="text" name="Number" onChange={(p)=>this.setState({Number:p.target.value})} value = {this.state.Number} />
                        <label>Status</label>
                        <input type="text" name="Status" onChange={(p)=>this.setState({Status:p.target.value})} value = {this.state.Status} />
                        <label>Priority</label>
                        <input type="text" name="Priority" onChange={(p)=>this.setState({Priority:p.target.value})} value = {this.state.Priority} />

                        <button onClick = {this.sendTicket}>Send Ticket</button>
                    </form>
    
               </div>
            </div>
        )
    }
}