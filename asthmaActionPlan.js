console.log('asthmaActionPlan.js loaded')

asthmaActionPlan=function(div){ // ini
    //console.log('ini')
    if(!div){
        if(!document.getElementById('asthmaActionPlanDiv')){
            asthmaActionPlan.div = document.createElement('div')
            $(asthmaActionPlan.div).addClass('container') // so bootstrap will deal with css
            asthmaActionPlan.div.id='asthmaActionPlanDiv'
            document.body.appendChild(asthmaActionPlan.div)
        }else{
            asthmaActionPlan.div=document.getElementById('asthmaActionPlanDiv')
        }
    }else{
        asthmaActionPlan.div=div
    }
    asthmaActionPlan.div.innerHTML='<button class="btn btn-primary" onclick="asthmaActionPlan.onclick(\'create\')">Create a new plan</button>, <button class="btn btn-primary" onclick="asthmaActionPlan.onclick(\'load\')">Load a local plan</button> or <button class="btn btn-primary" onclick="asthmaActionPlan.onclick(\'import\')">Import an external plan</button>.'
    // looks for fun in teh hash
    if(location.hash.length>0){
        asthmaActionPlan.onclick(location.hash.slice(1))
    }
}

//asthmaActionPlan.localStorage=localStorage.asthmaActionPlan
if(!localStorage.asthmaActionPlan){
    asthmaActionPlan.localStorage={}
}else{
    asthmaActionPlan.localStorage=JSON.parse(localStorage.asthmaActionPlan)
}

asthmaActionPlan.onclick=function(fun){
    asthmaActionPlan[fun]()
}
asthmaActionPlan.create=function(){ // create a new plan
    console.log('creating a new plan')
    asthmaActionPlan.localStorage.role='create'
    localStorage.asthmaActionPlan=JSON.stringify(asthmaActionPlan.localStorage)
    // start with the header
    var h = '<table><tr>'
    h+='<td style="vertical-align:top;padding:10px"><b style:>My Asthma Action Plan</b></td>'
    h+='<td style="vertical-align:top">'
        h+='<table>'
            h+='<tr><td>Name: <input type="text"  id="asthmaActionPlan_name"></td></tr>'
            h+='<tr><td>Printed on: <span style="color:blue;font-size:small" id="asthmaActionPlan_printedOn">'+new Date()+'</span></td></tr>'
            h+='<tr><td>Created on: <span style="color:navy;font-size:small">'+new Date()+'</span></td></tr>'
        h+='</table>'
    h+='</td>'
    h+='</tr></table>' 
    // body
    h+='<table style="border: 1px solid black">'
        h+='<tr><td><b>Asthma Triggers:</b> Colds or Infections, Exercise, Weather, Outdoor Allergies, Animal Allergies, Dust.</td></tr>'
        h+='<tr><td>'
            h+='<table style="border: 1px solid black;width:100%">'
                h+='<tr><td style="border: 1px solid black">My Best Peak Flow: <input value="550" size=5> </td><td style="background-color:green;color:white;padding:10px;border: 1px solid black"> GREEN ZONE: DOING WELL</td></tr>'
                h+='<tr>'
                    h+='<td><table><tr><td style="vertical-align:top;padding:10px;border: 1px solid black;background-color:green;color:white;width:20%">Peak flow more than <u>440</u> (greater than 80% of best)</td><td style="vertical-align:top;padding:10px;border: 1px solid black;width:20%"><li>Breathing is good</li><li>No Cough or Wheeze</li><li>Can run and play normaly</li></td></tr></table></td>'
                    h+='<td style="vertical-align:top;padding:10px;border: 1px solid black"><i>Controler Medication(s):</i><div id="greenMedications"></div></td>'
                h+='</tr>'
                h+='<tr>'
                    h+='<td style="border: 1px solid black">Use this medication 20 minutes before physical activity:</td>'
                    h+='<td style="border: 1px solid black;padding:10px"><div id="greenMedications20mins"></div></td>'
                h+='</tr>'
            h+='</table>'
        h+='</td></tr>'
        h+='<tr><td style="border: 1px solid black;background-color:yellow;text-align:center">YELLOW ZONE: CAUTION</td></tr>'
    h+='</table>'
    asthmaActionPlan.div.innerHTML=h
    setInterval(function(){
        asthmaActionPlan_printedOn.textContent=new Date()
    },1000)
    asthmaActionPlan.medication(greenMedications)
    asthmaActionPlan.medication(greenMedications20mins)
}
asthmaActionPlan.import=function(){
    console.log('import')
    4
}
asthmaActionPlan.load=function(){
    console.log('load')
    4
}

asthmaActionPlan.medication=function(div){ // create table for filling medication
    div.innerHTML='<table><tr><td style="padding:10px"><b><u>Medicine</u></b></td><td style="padding:10px"><b><u>How_Much_to_Take</u></b></td><td style="padding:10px"><b><u>How_Often</u></b></td><td></td></tr></table> <button>Add medicine<button>'
    // add medication
    var medicine = {}
    // get medicine data structure
    $.getJSON('medicine.json').then(function(x){medicine=x})

    $('button',div)[0].onclick=function(evt){
        var bt = this
        bt.hidden=true // hide the butto that was just pressed
        var sl1 = document.createElement('select')
        var op = document.createElement('option')
        op.value=op.textContent='select Medicine:'
        sl1.appendChild(op)
        Object.getOwnPropertyNames(medicine).forEach(function(p){
            var op = document.createElement('option')
            op.value=op.textContent=p
            sl1.appendChild(op)        
        })
        div.appendChild(sl1)
        sl1.onchange=function(){
            var tb = $('table',div.parentElement)[0]
            var tr = document.createElement('tr')
            tb.tBodies[0].appendChild(tr)
            var td = document.createElement('td')
            td.textContent=sl1.selectedOptions[0].value
            td.style.padding='10px';td.style.color='blue'
            tr.appendChild(td)
            $(sl1).remove()
            var sl2 = document.createElement('select')
            var op = document.createElement('option')
            op.value=op.textContent='select How Much to Take:'
            sl2.appendChild(op)
            div.appendChild(sl2)
            Object.getOwnPropertyNames(medicine[sl1.selectedOptions[0].value]).forEach(function(p){
                var op = document.createElement('option')
                op.value=op.textContent=p
                sl2.appendChild(op)
            })
            sl2.onchange=function(){
                var td = document.createElement('td')
                td.textContent=sl2.selectedOptions[0].value
                td.style.padding='10px';td.style.color='blue'
                tr.appendChild(td)
                $(sl2).remove()
                var sl3 = document.createElement('select')
                var op = document.createElement('option')
                op.value=op.textContent='select How Often:'
                sl3.appendChild(op)
                div.appendChild(sl3)
                medicine[sl1.selectedOptions[0].value][sl2.selectedOptions[0].value].forEach(function(p){
                    var op = document.createElement('option')
                    op.value=op.textContent=p
                    sl3.appendChild(op)
                })
                sl3.onchange=function(){
                    var td = document.createElement('td')
                    td.textContent=sl3.selectedOptions[0].value
                    td.style.padding='10px';td.style.color='blue';td.style.color='blue'
                    tr.appendChild(td)
                    $(sl3).remove()
                    $('button',div)[0].hidden=false
                }
                4
            }
            4
        }
        4
    }

}


asthmaActionPlan.header = function(){ // check header information
    if(!asthmaActionPlan.localStorage.head){ // create asthma action plan


    }
    4
}



$(document).ready(function(){
    // if it is the base page go ahead and assemble it
    if(location.href.match('asthma/asthmaActionPlan.html')){
        asthmaActionPlan()
    }  
})