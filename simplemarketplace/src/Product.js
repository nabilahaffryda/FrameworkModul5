import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
export default class Product extends Component {
    render() {
        return(
            <div id="content" class="site-content">
            <div id="primary" class="content-area column full">
                <main id="main" class="site-main">
                <h2>Home</h2> <br></br>
                <div className="row">
                    <div className="col-md-12">
                    <Grid container spacing={2}>
                    <Grid item xs={4}>
                    <img src="exo/loveshot.png" width="300"/>
                    <h4 className="title1">EXO LOVESHOT</h4>
                    </Grid>
                    <Grid item xs={4}>
                    <img src="exo/power.png" width="300"/>
                    <h4 className="title1">EXO POWER</h4>
                    </Grid>
                    <Grid item xs={4}>
                    <img src="exo/obsession.png" width="300"/>
                    <h4 className="title1">EXO OBSESSION</h4>
                    </Grid>
                    <Grid item xs={4}>
                    <img src="exo/thewar.png" width="300"/>
                    <h4 className="title1">EXO THE WAR</h4>
                    </Grid>
                    <Grid item xs={4}>
                    <img src="exo/power.png" width="300"/>
                    <h4 className="title1">EXO POWER</h4>
                    </Grid>
                    <Grid item xs={4}>
                    <img src="exo/tempo.png" width="300"/>
                    <h4 className="title1">EXO TEMPO</h4>
                    </Grid>
                    <Grid item xs={4}>
                    <img src="svt/directorcut.png" width="300"/>
                    <h4 className="title1">SEVENTEEN DIRECTOR CUT</h4>
                    </Grid>
                    <Grid item xs={4}>
                    <img src="svt/AI1.png" width="300"/>
                    <h4 className="title1">SEVENTEEN AI1</h4>
                    </Grid>
                    <Grid item xs={4}>
                    <img src="svt/loveletter.png" width="300"/>
                    <h4 className="title1">SEVENTEEN LOVE LETTER</h4>
                    </Grid>
                    <Grid item xs={4}>
                    <img src="svt/anode.png" width="300"/>
                    <h4 className="title1">SEVENTEEN AN ODE</h4>
                    </Grid>
                    <Grid item xs={4}>
                    <img src="svt/henggarae.png" width="300"/>
                    <h4 className="title1">SEVENTEEN HENGGARAE</h4>
                    </Grid>
                    <Grid item xs={4}>
                    <img src="svt/semicolon.png" width="300"/>
                    <h4 className="title1">SEVENTEEN SEMICOLON</h4>
                    </Grid>
                    </Grid>
                    </div>
                </div>
                </main>
            </div>
          </div>
        );
    }
}