<template>
 <div class="row">
          <div class="col-md-12">
              <div class="col s12" v-for="item in items" v-bind="item" v-bind:key="item"  >
                  <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                      <div class="col s2">

                           <img :src="item.owner.avatar_url"  class="circle responsive-img">
                      </div>
                      <div class="col s10">
                        <span class="black-text">
                          <ul>
                            <li class="float-left"> {{item.name}}</li> 
                            <li>{{item.description}}</li>  
                            <button v-on:click="next()"> Next </button>
                          </ul>
                        
                 
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

          </div>
        </div>
</template>
