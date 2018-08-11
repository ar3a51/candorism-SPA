!function(a,i){if("function"==typeof define&&define.amd)define(["moment","jquery"],function(t,e){return a.daterangepicker=i(t,e)});else if("object"==typeof module&&module.exports){var t="undefined"!=typeof window?window.jQuery:void 0;t||(t=require("jquery")).fn||(t.fn={}),module.exports=i(require("moment"),t)}else a.daterangepicker=i(a.moment,a.jQuery)}(this,function(j,H){var i=function(t,e,a){if(this.parentEl="body",this.element=H(t),this.startDate=j().startOf("day"),this.endDate=j().endOf("day"),this.minDate=!1,this.maxDate=!1,this.dateLimit=!1,this.autoApply=!1,this.singleDatePicker=!1,this.showDropdowns=!1,this.showWeekNumbers=!1,this.showISOWeekNumbers=!1,this.showCustomRangeLabel=!0,this.timePicker=!1,this.timePicker24Hour=!1,this.timePickerIncrement=1,this.timePickerSeconds=!1,this.linkedCalendars=!0,this.autoUpdateInput=!0,this.alwaysShowCalendars=!1,this.ranges={},this.opens="right",this.element.hasClass("pull-right")&&(this.opens="left"),this.drops="down",this.element.hasClass("dropup")&&(this.drops="up"),this.buttonClasses="btn btn-sm",this.applyClass="btn-success",this.cancelClass="btn-default",this.locale={direction:"ltr",format:j.localeData().longDateFormat("L"),separator:" - ",applyLabel:"Apply",cancelLabel:"Cancel",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:j.weekdaysMin(),monthNames:j.monthsShort(),firstDay:j.localeData().firstDayOfWeek()},this.callback=function(){},this.isShowing=!1,this.leftCalendar={},this.rightCalendar={},"object"==typeof e&&null!==e||(e={}),"string"==typeof(e=H.extend(this.element.data(),e)).template||e.template instanceof H||(e.template='<div class="daterangepicker dropdown-menu"><div class="calendar left"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_start" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="calendar right"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_end" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="ranges"><div class="range_inputs"><button class="applyBtn" disabled="disabled" type="button"></button> <button class="cancelBtn" type="button"></button></div></div></div>'),this.parentEl=e.parentEl&&H(e.parentEl).length?H(e.parentEl):H(this.parentEl),this.container=H(e.template).appendTo(this.parentEl),"object"==typeof e.locale&&("string"==typeof e.locale.direction&&(this.locale.direction=e.locale.direction),"string"==typeof e.locale.format&&(this.locale.format=e.locale.format),"string"==typeof e.locale.separator&&(this.locale.separator=e.locale.separator),"object"==typeof e.locale.daysOfWeek&&(this.locale.daysOfWeek=e.locale.daysOfWeek.slice()),"object"==typeof e.locale.monthNames&&(this.locale.monthNames=e.locale.monthNames.slice()),"number"==typeof e.locale.firstDay&&(this.locale.firstDay=e.locale.firstDay),"string"==typeof e.locale.applyLabel&&(this.locale.applyLabel=e.locale.applyLabel),"string"==typeof e.locale.cancelLabel&&(this.locale.cancelLabel=e.locale.cancelLabel),"string"==typeof e.locale.weekLabel&&(this.locale.weekLabel=e.locale.weekLabel),"string"==typeof e.locale.customRangeLabel)){(d=document.createElement("textarea")).innerHTML=e.locale.customRangeLabel;var i=d.value;this.locale.customRangeLabel=i}if(this.container.addClass(this.locale.direction),"string"==typeof e.startDate&&(this.startDate=j(e.startDate,this.locale.format)),"string"==typeof e.endDate&&(this.endDate=j(e.endDate,this.locale.format)),"string"==typeof e.minDate&&(this.minDate=j(e.minDate,this.locale.format)),"string"==typeof e.maxDate&&(this.maxDate=j(e.maxDate,this.locale.format)),"object"==typeof e.startDate&&(this.startDate=j(e.startDate)),"object"==typeof e.endDate&&(this.endDate=j(e.endDate)),"object"==typeof e.minDate&&(this.minDate=j(e.minDate)),"object"==typeof e.maxDate&&(this.maxDate=j(e.maxDate)),this.minDate&&this.startDate.isBefore(this.minDate)&&(this.startDate=this.minDate.clone()),this.maxDate&&this.endDate.isAfter(this.maxDate)&&(this.endDate=this.maxDate.clone()),"string"==typeof e.applyClass&&(this.applyClass=e.applyClass),"string"==typeof e.cancelClass&&(this.cancelClass=e.cancelClass),"object"==typeof e.dateLimit&&(this.dateLimit=e.dateLimit),"string"==typeof e.opens&&(this.opens=e.opens),"string"==typeof e.drops&&(this.drops=e.drops),"boolean"==typeof e.showWeekNumbers&&(this.showWeekNumbers=e.showWeekNumbers),"boolean"==typeof e.showISOWeekNumbers&&(this.showISOWeekNumbers=e.showISOWeekNumbers),"string"==typeof e.buttonClasses&&(this.buttonClasses=e.buttonClasses),"object"==typeof e.buttonClasses&&(this.buttonClasses=e.buttonClasses.join(" ")),"boolean"==typeof e.showDropdowns&&(this.showDropdowns=e.showDropdowns),"boolean"==typeof e.showCustomRangeLabel&&(this.showCustomRangeLabel=e.showCustomRangeLabel),"boolean"==typeof e.singleDatePicker&&(this.singleDatePicker=e.singleDatePicker,this.singleDatePicker&&(this.endDate=this.startDate.clone())),"boolean"==typeof e.timePicker&&(this.timePicker=e.timePicker),"boolean"==typeof e.timePickerSeconds&&(this.timePickerSeconds=e.timePickerSeconds),"number"==typeof e.timePickerIncrement&&(this.timePickerIncrement=e.timePickerIncrement),"boolean"==typeof e.timePicker24Hour&&(this.timePicker24Hour=e.timePicker24Hour),"boolean"==typeof e.autoApply&&(this.autoApply=e.autoApply),"boolean"==typeof e.autoUpdateInput&&(this.autoUpdateInput=e.autoUpdateInput),"boolean"==typeof e.linkedCalendars&&(this.linkedCalendars=e.linkedCalendars),"function"==typeof e.isInvalidDate&&(this.isInvalidDate=e.isInvalidDate),"function"==typeof e.isCustomDate&&(this.isCustomDate=e.isCustomDate),"boolean"==typeof e.alwaysShowCalendars&&(this.alwaysShowCalendars=e.alwaysShowCalendars),0!=this.locale.firstDay)for(var s=this.locale.firstDay;0<s;)this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()),s--;var n,r,o;if(void 0===e.startDate&&void 0===e.endDate&&H(this.element).is("input[type=text]")){var h=H(this.element).val(),l=h.split(this.locale.separator);n=r=null,2==l.length?(n=j(l[0],this.locale.format),r=j(l[1],this.locale.format)):this.singleDatePicker&&""!==h&&(n=j(h,this.locale.format),r=j(h,this.locale.format)),null!==n&&null!==r&&(this.setStartDate(n),this.setEndDate(r))}if("object"==typeof e.ranges){for(o in e.ranges){n="string"==typeof e.ranges[o][0]?j(e.ranges[o][0],this.locale.format):j(e.ranges[o][0]),r="string"==typeof e.ranges[o][1]?j(e.ranges[o][1],this.locale.format):j(e.ranges[o][1]),this.minDate&&n.isBefore(this.minDate)&&(n=this.minDate.clone());var c=this.maxDate;if(this.dateLimit&&c&&n.clone().add(this.dateLimit).isAfter(c)&&(c=n.clone().add(this.dateLimit)),c&&r.isAfter(c)&&(r=c.clone()),!(this.minDate&&r.isBefore(this.minDate,this.timepicker?"minute":"day")||c&&n.isAfter(c,this.timepicker?"minute":"day"))){var d;(d=document.createElement("textarea")).innerHTML=o;i=d.value;this.ranges[i]=[n,r]}}var m="<ul>";for(o in this.ranges)m+='<li data-range-key="'+o+'">'+o+"</li>";this.showCustomRangeLabel&&(m+='<li data-range-key="'+this.locale.customRangeLabel+'">'+this.locale.customRangeLabel+"</li>"),m+="</ul>",this.container.find(".ranges").prepend(m)}"function"==typeof a&&(this.callback=a),this.timePicker||(this.startDate=this.startDate.startOf("day"),this.endDate=this.endDate.endOf("day"),this.container.find(".calendar-time").hide()),this.timePicker&&this.autoApply&&(this.autoApply=!1),this.autoApply&&"object"!=typeof e.ranges?this.container.find(".ranges").hide():this.autoApply&&this.container.find(".applyBtn, .cancelBtn").addClass("hide"),this.singleDatePicker&&(this.container.addClass("single"),this.container.find(".calendar.left").addClass("single"),this.container.find(".calendar.left").show(),this.container.find(".calendar.right").hide(),this.container.find(".daterangepicker_input input, .daterangepicker_input > i").hide(),this.timePicker?this.container.find(".ranges ul").hide():this.container.find(".ranges").hide()),(void 0===e.ranges&&!this.singleDatePicker||this.alwaysShowCalendars)&&this.container.addClass("show-calendar"),this.container.addClass("opens"+this.opens),void 0!==e.ranges&&"right"==this.opens&&this.container.find(".ranges").prependTo(this.container.find(".calendar.left").parent()),this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses),this.applyClass.length&&this.container.find(".applyBtn").addClass(this.applyClass),this.cancelClass.length&&this.container.find(".cancelBtn").addClass(this.cancelClass),this.container.find(".applyBtn").html(this.locale.applyLabel),this.container.find(".cancelBtn").html(this.locale.cancelLabel),this.container.find(".calendar").on("click.daterangepicker",".prev",H.proxy(this.clickPrev,this)).on("click.daterangepicker",".next",H.proxy(this.clickNext,this)).on("mousedown.daterangepicker","td.available",H.proxy(this.clickDate,this)).on("mouseenter.daterangepicker","td.available",H.proxy(this.hoverDate,this)).on("mouseleave.daterangepicker","td.available",H.proxy(this.updateFormInputs,this)).on("change.daterangepicker","select.yearselect",H.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.monthselect",H.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.hourselect,select.minuteselect,select.secondselect,select.ampmselect",H.proxy(this.timeChanged,this)).on("click.daterangepicker",".daterangepicker_input input",H.proxy(this.showCalendars,this)).on("focus.daterangepicker",".daterangepicker_input input",H.proxy(this.formInputsFocused,this)).on("blur.daterangepicker",".daterangepicker_input input",H.proxy(this.formInputsBlurred,this)).on("change.daterangepicker",".daterangepicker_input input",H.proxy(this.formInputsChanged,this)),this.container.find(".ranges").on("click.daterangepicker","button.applyBtn",H.proxy(this.clickApply,this)).on("click.daterangepicker","button.cancelBtn",H.proxy(this.clickCancel,this)).on("click.daterangepicker","li",H.proxy(this.clickRange,this)).on("mouseenter.daterangepicker","li",H.proxy(this.hoverRange,this)).on("mouseleave.daterangepicker","li",H.proxy(this.updateFormInputs,this)),this.element.is("input")||this.element.is("button")?this.element.on({"click.daterangepicker":H.proxy(this.show,this),"focus.daterangepicker":H.proxy(this.show,this),"keyup.daterangepicker":H.proxy(this.elementChanged,this),"keydown.daterangepicker":H.proxy(this.keydown,this)}):this.element.on("click.daterangepicker",H.proxy(this.toggle,this)),this.element.is("input")&&!this.singleDatePicker&&this.autoUpdateInput?(this.element.val(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format)),this.element.trigger("change")):this.element.is("input")&&this.autoUpdateInput&&(this.element.val(this.startDate.format(this.locale.format)),this.element.trigger("change"))};return i.prototype={constructor:i,setStartDate:function(t){"string"==typeof t&&(this.startDate=j(t,this.locale.format)),"object"==typeof t&&(this.startDate=j(t)),this.timePicker||(this.startDate=this.startDate.startOf("day")),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement),this.minDate&&this.startDate.isBefore(this.minDate)&&(this.startDate=this.minDate.clone(),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)),this.maxDate&&this.startDate.isAfter(this.maxDate)&&(this.startDate=this.maxDate.clone(),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.floor(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)),this.isShowing||this.updateElement(),this.updateMonthsInView()},setEndDate:function(t){"string"==typeof t&&(this.endDate=j(t,this.locale.format)),"object"==typeof t&&(this.endDate=j(t)),this.timePicker||(this.endDate=this.endDate.endOf("day")),this.timePicker&&this.timePickerIncrement&&this.endDate.minute(Math.round(this.endDate.minute()/this.timePickerIncrement)*this.timePickerIncrement),this.endDate.isBefore(this.startDate)&&(this.endDate=this.startDate.clone()),this.maxDate&&this.endDate.isAfter(this.maxDate)&&(this.endDate=this.maxDate.clone()),this.dateLimit&&this.startDate.clone().add(this.dateLimit).isBefore(this.endDate)&&(this.endDate=this.startDate.clone().add(this.dateLimit)),this.previousRightTime=this.endDate.clone(),this.isShowing||this.updateElement(),this.updateMonthsInView()},isInvalidDate:function(){return!1},isCustomDate:function(){return!1},updateView:function(){this.timePicker&&(this.renderTimePicker("left"),this.renderTimePicker("right"),this.endDate?this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled"):this.container.find(".right .calendar-time select").attr("disabled","disabled").addClass("disabled")),this.endDate?(this.container.find('input[name="daterangepicker_end"]').removeClass("active"),this.container.find('input[name="daterangepicker_start"]').addClass("active")):(this.container.find('input[name="daterangepicker_end"]').addClass("active"),this.container.find('input[name="daterangepicker_start"]').removeClass("active")),this.updateMonthsInView(),this.updateCalendars(),this.updateFormInputs()},updateMonthsInView:function(){if(this.endDate){if(!this.singleDatePicker&&this.leftCalendar.month&&this.rightCalendar.month&&(this.startDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.startDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM"))&&(this.endDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.endDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM")))return;this.leftCalendar.month=this.startDate.clone().date(2),this.linkedCalendars||this.endDate.month()==this.startDate.month()&&this.endDate.year()==this.startDate.year()?this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month"):this.rightCalendar.month=this.endDate.clone().date(2)}else this.leftCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&this.rightCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&(this.leftCalendar.month=this.startDate.clone().date(2),this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month"));this.maxDate&&this.linkedCalendars&&!this.singleDatePicker&&this.rightCalendar.month>this.maxDate&&(this.rightCalendar.month=this.maxDate.clone().date(2),this.leftCalendar.month=this.maxDate.clone().date(2).subtract(1,"month"))},updateCalendars:function(){if(this.timePicker){var t,e,a,i;if(this.endDate){if(t=parseInt(this.container.find(".left .hourselect").val(),10),e=parseInt(this.container.find(".left .minuteselect").val(),10),a=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0,!this.timePicker24Hour)"PM"===(i=this.container.find(".left .ampmselect").val())&&t<12&&(t+=12),"AM"===i&&12===t&&(t=0)}else if(t=parseInt(this.container.find(".right .hourselect").val(),10),e=parseInt(this.container.find(".right .minuteselect").val(),10),a=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0,!this.timePicker24Hour)"PM"===(i=this.container.find(".right .ampmselect").val())&&t<12&&(t+=12),"AM"===i&&12===t&&(t=0);this.leftCalendar.month.hour(t).minute(e).second(a),this.rightCalendar.month.hour(t).minute(e).second(a)}this.renderCalendar("left"),this.renderCalendar("right"),this.container.find(".ranges li").removeClass("active"),null!=this.endDate&&this.calculateChosenLabel()},renderCalendar:function(t){var e,a=(e="left"==t?this.leftCalendar:this.rightCalendar).month.month(),i=e.month.year(),s=e.month.hour(),n=e.month.minute(),r=e.month.second(),o=j([i,a]).daysInMonth(),h=j([i,a,1]),l=j([i,a,o]),c=j(h).subtract(1,"month").month(),d=j(h).subtract(1,"month").year(),m=j([d,c]).daysInMonth(),f=h.day();(e=[]).firstDay=h,e.lastDay=l;for(var p=0;p<6;p++)e[p]=[];var u=m-f+this.locale.firstDay+1;m<u&&(u-=7),f==this.locale.firstDay&&(u=m-6);for(var g=j([d,c,u,12,n,r]),D=(p=0,0),k=0;p<42;p++,D++,g=j(g).add(24,"hour"))0<p&&D%7==0&&(D=0,k++),e[k][D]=g.clone().hour(s).minute(n).second(r),g.hour(12),this.minDate&&e[k][D].format("YYYY-MM-DD")==this.minDate.format("YYYY-MM-DD")&&e[k][D].isBefore(this.minDate)&&"left"==t&&(e[k][D]=this.minDate.clone()),this.maxDate&&e[k][D].format("YYYY-MM-DD")==this.maxDate.format("YYYY-MM-DD")&&e[k][D].isAfter(this.maxDate)&&"right"==t&&(e[k][D]=this.maxDate.clone());"left"==t?this.leftCalendar.calendar=e:this.rightCalendar.calendar=e;var y="left"==t?this.minDate:this.startDate,v=this.maxDate,b=("left"==t?this.startDate:this.endDate,"ltr"==this.locale.direction?{left:"chevron-left",right:"chevron-right"}:{left:"chevron-right",right:"chevron-left"}),C='<table class="table-condensed">';C+="<thead>",C+="<tr>",(this.showWeekNumbers||this.showISOWeekNumbers)&&(C+="<th></th>"),y&&!y.isBefore(e.firstDay)||this.linkedCalendars&&"left"!=t?C+="<th></th>":C+='<th class="prev available"><i class="fa fa-'+b.left+" glyphicon glyphicon-"+b.left+'"></i></th>';var w=this.locale.monthNames[e[1][1].month()]+e[1][1].format(" YYYY");if(this.showDropdowns){for(var Y=e[1][1].month(),P=e[1][1].year(),M=v&&v.year()||P+5,x=y&&y.year()||P-50,I=P==x,L=P==M,S='<select class="monthselect">',A=0;A<12;A++)(!I||A>=y.month())&&(!L||A<=v.month())?S+="<option value='"+A+"'"+(A===Y?" selected='selected'":"")+">"+this.locale.monthNames[A]+"</option>":S+="<option value='"+A+"'"+(A===Y?" selected='selected'":"")+" disabled='disabled'>"+this.locale.monthNames[A]+"</option>";S+="</select>";for(var _='<select class="yearselect">',B=x;B<=M;B++)_+='<option value="'+B+'"'+(B===P?' selected="selected"':"")+">"+B+"</option>";w=S+(_+="</select>")}if(C+='<th colspan="5" class="month">'+w+"</th>",v&&!v.isAfter(e.lastDay)||this.linkedCalendars&&"right"!=t&&!this.singleDatePicker?C+="<th></th>":C+='<th class="next available"><i class="fa fa-'+b.right+" glyphicon glyphicon-"+b.right+'"></i></th>',C+="</tr>",C+="<tr>",(this.showWeekNumbers||this.showISOWeekNumbers)&&(C+='<th class="week">'+this.locale.weekLabel+"</th>"),H.each(this.locale.daysOfWeek,function(t,e){C+="<th>"+e+"</th>"}),C+="</tr>",C+="</thead>",C+="<tbody>",null==this.endDate&&this.dateLimit){var E=this.startDate.clone().add(this.dateLimit).endOf("day");v&&!E.isBefore(v)||(v=E)}for(k=0;k<6;k++){C+="<tr>",this.showWeekNumbers?C+='<td class="week">'+e[k][0].week()+"</td>":this.showISOWeekNumbers&&(C+='<td class="week">'+e[k][0].isoWeek()+"</td>");for(D=0;D<7;D++){var W=[];e[k][D].isSame(new Date,"day")&&W.push("today"),5<e[k][D].isoWeekday()&&W.push("weekend"),e[k][D].month()!=e[1][1].month()&&W.push("off"),this.minDate&&e[k][D].isBefore(this.minDate,"day")&&W.push("off","disabled"),v&&e[k][D].isAfter(v,"day")&&W.push("off","disabled"),this.isInvalidDate(e[k][D])&&W.push("off","disabled"),e[k][D].format("YYYY-MM-DD")==this.startDate.format("YYYY-MM-DD")&&W.push("active","start-date"),null!=this.endDate&&e[k][D].format("YYYY-MM-DD")==this.endDate.format("YYYY-MM-DD")&&W.push("active","end-date"),null!=this.endDate&&e[k][D]>this.startDate&&e[k][D]<this.endDate&&W.push("in-range");var O=this.isCustomDate(e[k][D]);!1!==O&&("string"==typeof O?W.push(O):Array.prototype.push.apply(W,O));var N="",R=!1;for(p=0;p<W.length;p++)N+=W[p]+" ","disabled"==W[p]&&(R=!0);R||(N+="available"),C+='<td class="'+N.replace(/^\s+|\s+$/g,"")+'" data-title="r'+k+"c"+D+'">'+e[k][D].date()+"</td>"}C+="</tr>"}C+="</tbody>",C+="</table>",this.container.find(".calendar."+t+" .calendar-table").html(C)},renderTimePicker:function(t){if("right"!=t||this.endDate){var e,a,i,s=this.maxDate;if(!this.dateLimit||this.maxDate&&!this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)||(s=this.startDate.clone().add(this.dateLimit)),"left"==t)a=this.startDate.clone(),i=this.minDate;else if("right"==t){a=this.endDate.clone(),i=this.startDate;var n=this.container.find(".calendar.right .calendar-time div");if(""!=n.html()&&(a.hour(n.find(".hourselect option:selected").val()||a.hour()),a.minute(n.find(".minuteselect option:selected").val()||a.minute()),a.second(n.find(".secondselect option:selected").val()||a.second()),!this.timePicker24Hour)){var r=n.find(".ampmselect option:selected").val();"PM"===r&&a.hour()<12&&a.hour(a.hour()+12),"AM"===r&&12===a.hour()&&a.hour(0)}a.isBefore(this.startDate)&&(a=this.startDate.clone()),s&&a.isAfter(s)&&(a=s.clone())}e='<select class="hourselect">';for(var o=this.timePicker24Hour?0:1,h=this.timePicker24Hour?23:12,l=o;l<=h;l++){var c=l;this.timePicker24Hour||(c=12<=a.hour()?12==l?12:l+12:12==l?0:l);var d=a.clone().hour(c),m=!1;i&&d.minute(59).isBefore(i)&&(m=!0),s&&d.minute(0).isAfter(s)&&(m=!0),c!=a.hour()||m?e+=m?'<option value="'+l+'" disabled="disabled" class="disabled">'+l+"</option>":'<option value="'+l+'">'+l+"</option>":e+='<option value="'+l+'" selected="selected">'+l+"</option>"}e+="</select> ",e+=': <select class="minuteselect">';for(l=0;l<60;l+=this.timePickerIncrement){var f=l<10?"0"+l:l;d=a.clone().minute(l),m=!1;i&&d.second(59).isBefore(i)&&(m=!0),s&&d.second(0).isAfter(s)&&(m=!0),a.minute()!=l||m?e+=m?'<option value="'+l+'" disabled="disabled" class="disabled">'+f+"</option>":'<option value="'+l+'">'+f+"</option>":e+='<option value="'+l+'" selected="selected">'+f+"</option>"}if(e+="</select> ",this.timePickerSeconds){e+=': <select class="secondselect">';for(l=0;l<60;l++){f=l<10?"0"+l:l,d=a.clone().second(l),m=!1;i&&d.isBefore(i)&&(m=!0),s&&d.isAfter(s)&&(m=!0),a.second()!=l||m?e+=m?'<option value="'+l+'" disabled="disabled" class="disabled">'+f+"</option>":'<option value="'+l+'">'+f+"</option>":e+='<option value="'+l+'" selected="selected">'+f+"</option>"}e+="</select> "}if(!this.timePicker24Hour){e+='<select class="ampmselect">';var p="",u="";i&&a.clone().hour(12).minute(0).second(0).isBefore(i)&&(p=' disabled="disabled" class="disabled"'),s&&a.clone().hour(0).minute(0).second(0).isAfter(s)&&(u=' disabled="disabled" class="disabled"'),12<=a.hour()?e+='<option value="AM"'+p+'>AM</option><option value="PM" selected="selected"'+u+">PM</option>":e+='<option value="AM" selected="selected"'+p+'>AM</option><option value="PM"'+u+">PM</option>",e+="</select>"}this.container.find(".calendar."+t+" .calendar-time div").html(e)}},updateFormInputs:function(){this.container.find("input[name=daterangepicker_start]").is(":focus")||this.container.find("input[name=daterangepicker_end]").is(":focus")||(this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.locale.format)),this.endDate&&this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format)),this.singleDatePicker||this.endDate&&(this.startDate.isBefore(this.endDate)||this.startDate.isSame(this.endDate))?this.container.find("button.applyBtn").removeAttr("disabled"):this.container.find("button.applyBtn").attr("disabled","disabled"))},move:function(){var t,e={top:0,left:0},a=H(window).width();this.parentEl.is("body")||(e={top:this.parentEl.offset().top-this.parentEl.scrollTop(),left:this.parentEl.offset().left-this.parentEl.scrollLeft()},a=this.parentEl[0].clientWidth+this.parentEl.offset().left),t="up"==this.drops?this.element.offset().top-this.container.outerHeight()-e.top:this.element.offset().top+this.element.outerHeight()-e.top,this.container["up"==this.drops?"addClass":"removeClass"]("dropup"),"left"==this.opens?(this.container.css({top:t,right:a-this.element.offset().left-this.element.outerWidth(),left:"auto"}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):"center"==this.opens?(this.container.css({top:t,left:this.element.offset().left-e.left+this.element.outerWidth()/2-this.container.outerWidth()/2,right:"auto"}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):(this.container.css({top:t,left:this.element.offset().left-e.left,right:"auto"}),this.container.offset().left+this.container.outerWidth()>H(window).width()&&this.container.css({left:"auto",right:0}))},show:function(t){this.isShowing||(this._outsideClickProxy=H.proxy(function(t){this.outsideClick(t)},this),H(document).on("mousedown.daterangepicker",this._outsideClickProxy).on("touchend.daterangepicker",this._outsideClickProxy).on("click.daterangepicker","[data-toggle=dropdown]",this._outsideClickProxy).on("focusin.daterangepicker",this._outsideClickProxy),H(window).on("resize.daterangepicker",H.proxy(function(t){this.move(t)},this)),this.oldStartDate=this.startDate.clone(),this.oldEndDate=this.endDate.clone(),this.previousRightTime=this.endDate.clone(),this.updateView(),this.container.show(),this.move(),this.element.trigger("show.daterangepicker",this),this.isShowing=!0)},hide:function(t){this.isShowing&&(this.endDate||(this.startDate=this.oldStartDate.clone(),this.endDate=this.oldEndDate.clone()),this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.callback(this.startDate,this.endDate,this.chosenLabel),this.updateElement(),H(document).off(".daterangepicker"),H(window).off(".daterangepicker"),this.container.hide(),this.element.trigger("hide.daterangepicker",this),this.isShowing=!1)},toggle:function(t){this.isShowing?this.hide():this.show()},outsideClick:function(t){var e=H(t.target);"focusin"==t.type||e.closest(this.element).length||e.closest(this.container).length||e.closest(".calendar-table").length||(this.hide(),this.element.trigger("outsideClick.daterangepicker",this))},showCalendars:function(){this.container.addClass("show-calendar"),this.move(),this.element.trigger("showCalendar.daterangepicker",this)},hideCalendars:function(){this.container.removeClass("show-calendar"),this.element.trigger("hideCalendar.daterangepicker",this)},hoverRange:function(t){if(!this.container.find("input[name=daterangepicker_start]").is(":focus")&&!this.container.find("input[name=daterangepicker_end]").is(":focus")){var e=t.target.getAttribute("data-range-key");if(e==this.locale.customRangeLabel)this.updateView();else{var a=this.ranges[e];this.container.find("input[name=daterangepicker_start]").val(a[0].format(this.locale.format)),this.container.find("input[name=daterangepicker_end]").val(a[1].format(this.locale.format))}}},clickRange:function(t){var e=t.target.getAttribute("data-range-key");if((this.chosenLabel=e)==this.locale.customRangeLabel)this.showCalendars();else{var a=this.ranges[e];this.startDate=a[0],this.endDate=a[1],this.timePicker||(this.startDate.startOf("day"),this.endDate.endOf("day")),this.alwaysShowCalendars||this.hideCalendars(),this.clickApply()}},clickPrev:function(t){H(t.target).parents(".calendar").hasClass("left")?(this.leftCalendar.month.subtract(1,"month"),this.linkedCalendars&&this.rightCalendar.month.subtract(1,"month")):this.rightCalendar.month.subtract(1,"month"),this.updateCalendars()},clickNext:function(t){H(t.target).parents(".calendar").hasClass("left")?this.leftCalendar.month.add(1,"month"):(this.rightCalendar.month.add(1,"month"),this.linkedCalendars&&this.leftCalendar.month.add(1,"month")),this.updateCalendars()},hoverDate:function(t){if(H(t.target).hasClass("available")){var e=H(t.target).attr("data-title"),a=e.substr(1,1),i=e.substr(3,1),r=H(t.target).parents(".calendar").hasClass("left")?this.leftCalendar.calendar[a][i]:this.rightCalendar.calendar[a][i];this.endDate&&!this.container.find("input[name=daterangepicker_start]").is(":focus")?this.container.find("input[name=daterangepicker_start]").val(r.format(this.locale.format)):this.endDate||this.container.find("input[name=daterangepicker_end]").is(":focus")||this.container.find("input[name=daterangepicker_end]").val(r.format(this.locale.format));var o=this.leftCalendar,h=this.rightCalendar,l=this.startDate;this.endDate||this.container.find(".calendar tbody td").each(function(t,e){if(!H(e).hasClass("week")){var a=H(e).attr("data-title"),i=a.substr(1,1),s=a.substr(3,1),n=H(e).parents(".calendar").hasClass("left")?o.calendar[i][s]:h.calendar[i][s];n.isAfter(l)&&n.isBefore(r)||n.isSame(r,"day")?H(e).addClass("in-range"):H(e).removeClass("in-range")}})}},clickDate:function(t){if(H(t.target).hasClass("available")){var e=H(t.target).attr("data-title"),a=e.substr(1,1),i=e.substr(3,1),s=H(t.target).parents(".calendar").hasClass("left")?this.leftCalendar.calendar[a][i]:this.rightCalendar.calendar[a][i];if(this.endDate||s.isBefore(this.startDate,"day")){if(this.timePicker){var n=parseInt(this.container.find(".left .hourselect").val(),10);if(!this.timePicker24Hour)"PM"===(h=this.container.find(".left .ampmselect").val())&&n<12&&(n+=12),"AM"===h&&12===n&&(n=0);var r=parseInt(this.container.find(".left .minuteselect").val(),10),o=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0;s=s.clone().hour(n).minute(r).second(o)}this.endDate=null,this.setStartDate(s.clone())}else if(!this.endDate&&s.isBefore(this.startDate))this.setEndDate(this.startDate.clone());else{if(this.timePicker){var h;n=parseInt(this.container.find(".right .hourselect").val(),10);if(!this.timePicker24Hour)"PM"===(h=this.container.find(".right .ampmselect").val())&&n<12&&(n+=12),"AM"===h&&12===n&&(n=0);r=parseInt(this.container.find(".right .minuteselect").val(),10),o=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0;s=s.clone().hour(n).minute(r).second(o)}this.setEndDate(s.clone()),this.autoApply&&(this.calculateChosenLabel(),this.clickApply())}this.singleDatePicker&&(this.setEndDate(this.startDate),this.timePicker||this.clickApply()),this.updateView(),t.stopPropagation()}},calculateChosenLabel:function(){var t=!0,e=0;for(var a in this.ranges){if(this.timePicker){if(this.startDate.isSame(this.ranges[a][0])&&this.endDate.isSame(this.ranges[a][1])){t=!1,this.chosenLabel=this.container.find(".ranges li:eq("+e+")").addClass("active").html();break}}else if(this.startDate.format("YYYY-MM-DD")==this.ranges[a][0].format("YYYY-MM-DD")&&this.endDate.format("YYYY-MM-DD")==this.ranges[a][1].format("YYYY-MM-DD")){t=!1,this.chosenLabel=this.container.find(".ranges li:eq("+e+")").addClass("active").html();break}e++}t&&(this.showCustomRangeLabel?this.chosenLabel=this.container.find(".ranges li:last").addClass("active").html():this.chosenLabel=null,this.showCalendars())},clickApply:function(t){this.hide(),this.element.trigger("apply.daterangepicker",this)},clickCancel:function(t){this.startDate=this.oldStartDate,this.endDate=this.oldEndDate,this.hide(),this.element.trigger("cancel.daterangepicker",this)},monthOrYearChanged:function(t){var e=H(t.target).closest(".calendar").hasClass("left"),a=e?"left":"right",i=this.container.find(".calendar."+a),s=parseInt(i.find(".monthselect").val(),10),n=i.find(".yearselect").val();e||(n<this.startDate.year()||n==this.startDate.year()&&s<this.startDate.month())&&(s=this.startDate.month(),n=this.startDate.year()),this.minDate&&(n<this.minDate.year()||n==this.minDate.year()&&s<this.minDate.month())&&(s=this.minDate.month(),n=this.minDate.year()),this.maxDate&&(n>this.maxDate.year()||n==this.maxDate.year()&&s>this.maxDate.month())&&(s=this.maxDate.month(),n=this.maxDate.year()),e?(this.leftCalendar.month.month(s).year(n),this.linkedCalendars&&(this.rightCalendar.month=this.leftCalendar.month.clone().add(1,"month"))):(this.rightCalendar.month.month(s).year(n),this.linkedCalendars&&(this.leftCalendar.month=this.rightCalendar.month.clone().subtract(1,"month"))),this.updateCalendars()},timeChanged:function(t){var e=H(t.target).closest(".calendar"),a=e.hasClass("left"),i=parseInt(e.find(".hourselect").val(),10),s=parseInt(e.find(".minuteselect").val(),10),n=this.timePickerSeconds?parseInt(e.find(".secondselect").val(),10):0;if(!this.timePicker24Hour){var r=e.find(".ampmselect").val();"PM"===r&&i<12&&(i+=12),"AM"===r&&12===i&&(i=0)}if(a){var o=this.startDate.clone();o.hour(i),o.minute(s),o.second(n),this.setStartDate(o),this.singleDatePicker?this.endDate=this.startDate.clone():this.endDate&&this.endDate.format("YYYY-MM-DD")==o.format("YYYY-MM-DD")&&this.endDate.isBefore(o)&&this.setEndDate(o.clone())}else if(this.endDate){var h=this.endDate.clone();h.hour(i),h.minute(s),h.second(n),this.setEndDate(h)}this.updateCalendars(),this.updateFormInputs(),this.renderTimePicker("left"),this.renderTimePicker("right")},formInputsChanged:function(t){var e=H(t.target).closest(".calendar").hasClass("right"),a=j(this.container.find('input[name="daterangepicker_start"]').val(),this.locale.format),i=j(this.container.find('input[name="daterangepicker_end"]').val(),this.locale.format);a.isValid()&&i.isValid()&&(e&&i.isBefore(a)&&(a=i.clone()),this.setStartDate(a),this.setEndDate(i),e?this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format)):this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format))),this.updateView()},formInputsFocused:function(t){this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass("active"),H(t.target).addClass("active"),H(t.target).closest(".calendar").hasClass("right")&&(this.endDate=null,this.setStartDate(this.startDate.clone()),this.updateView())},formInputsBlurred:function(t){if(!this.endDate){var e=this.container.find('input[name="daterangepicker_end"]').val(),a=j(e,this.locale.format);a.isValid()&&(this.setEndDate(a),this.updateView())}},elementChanged:function(){if(this.element.is("input")&&this.element.val().length&&!(this.element.val().length<this.locale.format.length)){var t=this.element.val().split(this.locale.separator),e=null,a=null;2===t.length&&(e=j(t[0],this.locale.format),a=j(t[1],this.locale.format)),(this.singleDatePicker||null===e||null===a)&&(a=e=j(this.element.val(),this.locale.format)),e.isValid()&&a.isValid()&&(this.setStartDate(e),this.setEndDate(a),this.updateView())}},keydown:function(t){9!==t.keyCode&&13!==t.keyCode||this.hide()},updateElement:function(){this.element.is("input")&&!this.singleDatePicker&&this.autoUpdateInput?(this.element.val(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format)),this.element.trigger("change")):this.element.is("input")&&this.autoUpdateInput&&(this.element.val(this.startDate.format(this.locale.format)),this.element.trigger("change"))},remove:function(){this.container.remove(),this.element.off(".daterangepicker"),this.element.removeData()}},H.fn.daterangepicker=function(e,a){return this.each(function(){var t=H(this);t.data("daterangepicker")&&t.data("daterangepicker").remove(),t.data("daterangepicker",new i(t,e,a))}),this},i});