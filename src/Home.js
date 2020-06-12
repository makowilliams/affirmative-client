import React from 'react';
import './Home.css';

function Home() {
    return (
        <body>
            <div class="calendar">

                 <div class="col leftCol">
                    <div class="content">
                        <h1 class="date">Saturday<span>June 6th</span></h1>
                        <h4 class="affirmaton">Affirmation of the day</h4>
                        <div class="notes">

                        <p>
                             <input type="text" value="" placeholder="new note"/>
                            <a href="#" title="Add note" class="addNote animate">+</a>
                        </p>
                        <ul class="noteList">
                            <li>Leg Day<a href="#" title="Remove note" class="removeNote animate">x</a></li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div class="col rightCol">
                    <div class="content">
                        <h2 class="year">2020</h2>
                        <ul class="months">
                            <li><a href="#" title="Jan" data-value="1">Jan</a></li>
                            <li><a href="#" title="Feb" data-value="2">Feb</a></li>
                            <li><a href="#" title="Mar" data-value="3">Mar</a></li>
                            <li><a href="#" title="Apr" data-value="4">Apr</a></li>
                            <li><a href="#" title="May" data-value="5">May</a></li>
                            <li><a href="#" title="Jun" data-value="6" class="selected">Jun</a></li>
                            <li><a href="#" title="Jul" data-value="7">Jul</a></li>
                            <li><a href="#" title="Aug" data-value="8">Aug</a></li>
                            <li><a href="#" title="Sep" data-value="9" >Sep</a></li>
                            <li><a href="#" title="Oct" data-value="10">Oct</a></li>
                            <li><a href="#" title="Nov" data-value="11">Nov</a></li>
                            <li><a href="#" title="Dec" data-value="12">Dec</a></li>
                        </ul>
                        <div class="clearfix"></div>
                            <ul class="weekday">
                                <li><a href="#" title="Mon" data-value="1">Mon</a></li>
                                <li><a href="#" title="Tue" data-value="2">Tue</a></li>
                                <li><a href="#" title="Wed" data-value="3">Wed</a></li>
                                <li><a href="#" title="Thu" data-value="4">Thu</a></li>
                                <li><a href="#" title="Fri" data-value="5">Fri</a></li>
                                <li><a href="#" title="Say" data-value="6">Sat</a></li>
                                <li><a href="#" title="Sun" data-value="7">Sun</a></li>
                            </ul>
                        <div class="clearfix"></div>
                            <ul class="days">
                                <script>
                                    for( var i = 1, i <= 31, i += 1 ){
                                        var addClass = '';
                                
                                        // switch( i ){
                                        //     case 8:
                                        //     case 10:
                                        //     case 27:
                                        //         addClass = ' class="event"';
                                        //     break;
                                        // }

                                        document.write( '<li><a href="#" title="'+i+'" data-value="'+i+'"'+_addClass+'>'+i+'</a></li>' )
                                    }
                                </script>
                            </ul>
                        <div class="clearfix"></div>
                    </div>
                </div>

                <div class="clearfix"></div>
            </div>
</body>
    ) 
            }



export default Home;

