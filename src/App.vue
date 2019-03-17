<template>
    <div id="app">
        <navigation :profile='profile'></navigation>
        <b-container class='page-container'>
            <b-row class='justify-content-center'>
                <b-col sm="12">
                    <b-card>
                        <div>
                            <h1>March Madness Team Comparisons</h1>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
            <b-row>
                <b-col sm='12'>
                    <b-card title='Select teams'>
                        <b-row>
                            <b-col lg='6'>
                                <label>Team 1:</label>
                                <autocomplete :items='teams' @selection='setTeam1($event)'></autocomplete>
                            </b-col>
                            <b-col lg='6'>
                                <label>Team 2:</label>
                                <autocomplete :items='teams' @selection='setTeam2($event)'></autocomplete>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
            <b-row v-if='!team1 || !team2'>
                <b-col>
                    <b-alert variant="primary" show>Select teams in order to view metrics</b-alert>
                </b-col>
            </b-row>
            <b-row>
                <b-col sm='12' v-if='team1 && team2'>
                    <b-card title='Metrics'>
                        <b-row>
                            <b-col auto></b-col>
                            <b-col v-if='team1' lg='4'>
                                <div>
                                    <h2>{{team1.name}}</h2>
                                </div>
                                <div class='logo-container'>
                                    <b-img :src='team1.logo' class='team-logo' />
                                </div>
                                <div><strong>{{team1.conference}}</strong></div>
                                <br />
                                <h4>Torvik</h4>
                                <div>
                                    <div><strong>BARTHAG: </strong><span :class='{ "text-success": (team2 && team1.torvik.barthag > team2.torvik.barthag), "text-danger": (team2 && team1.torvik.barthag < team2.torvik.barthag) }'>{{team1.torvik.barthag}}</span></div>
                                    <div><strong>Off Eff: </strong><span :class='{ "text-success": (team2 && team1.torvik.offensiveEff > team2.torvik.offensiveEff), "text-danger": (team2 && team1.torvik.offensiveEff < team2.torvik.offensiveEff) }'>{{team1.torvik.offensiveEff}}</span></div>
                                    <div><strong>Def Eff: </strong><span :class='{ "text-success": (team2 && team1.torvik.defensiveEff < team2.torvik.defensiveEff), "text-danger": (team2 && team1.torvik.defensiveEff > team2.torvik.defensiveEff) }'>{{team1.torvik.defensiveEff}}</span></div>
                                    <div><strong>Tempo: </strong>{{team1.torvik.tempo}}</div>
                                </div>
                                <br />
                                <h4>KenPom</h4>
                                <div>
                                    <div><strong>Eff: </strong><span :class='{ "text-success": (team2 && team1.kenpom.efficiency > team2.kenpom.efficiency), "text-danger": (team2 && team1.kenpom.efficiency < team2.kenpom.efficiency) }'>{{team1.kenpom.efficiency}}</span></div>
                                    <div><strong>Off Eff: </strong><span :class='{ "text-success": (team2 && team1.kenpom.offensiveEff > team2.kenpom.offensiveEff), "text-danger": (team2 && team1.kenpom.offensiveEff < team2.kenpom.offensiveEff) }'>{{team1.kenpom.offensiveEff}}</span></div>
                                    <div><strong>Def Eff: </strong><span :class='{ "text-success": (team2 && team1.kenpom.defensiveEff < team2.kenpom.defensiveEff), "text-danger": (team2 && team1.kenpom.defensiveEff > team2.kenpom.defensiveEff) }'>{{team1.kenpom.defensiveEff}}</span></div>
                                    <div><strong>Tempo: </strong>{{team1.kenpom.tempo}}</div>
                                    <div><strong>Luck: </strong><span :class='{ "text-success": (team2 && team1.kenpom.luck > team2.kenpom.luck), "text-danger": (team2 && team1.kenpom.luck < team2.kenpom.luck) }'>{{team1.kenpom.luck}}</span></div>
                                </div>
                            </b-col>
                            <b-col v-if='team2' lg='4'>
                                <div>
                                    <h2>{{team2.name}}</h2>
                                </div>
                                <div class='logo-container'>
                                    <b-img :src='team2.logo' class='team-logo' />
                                </div>
                                <div><strong>{{team2.conference}}</strong></div>
                                <br />
                                <h4>Torvik</h4>
                                <div>
                                    <div><strong>BARTHAG: </strong><span :class='{ "text-success": (team1 && team2.torvik.barthag > team1.torvik.barthag), "text-danger": (team1 && team2.torvik.barthag < team1.torvik.barthag) }'>{{team2.torvik.barthag}}</span></div>
                                    <div><strong>Off Eff: </strong><span :class='{ "text-success": (team1 && team2.torvik.offensiveEff > team1.torvik.offensiveEff), "text-danger": (team1 && team2.torvik.offensiveEff < team1.torvik.offensiveEff) }'>{{team2.torvik.offensiveEff}}</span></div>
                                    <div><strong>Def Eff: </strong><span :class='{ "text-success": (team1 && team2.torvik.defensiveEff < team1.torvik.defensiveEff), "text-danger": (team1 && team2.torvik.defensiveEff > team1.torvik.defensiveEff) }'>{{team2.torvik.defensiveEff}}</span></div>
                                    <div><strong>Tempo: </strong>{{team2.torvik.tempo}}</div>
                                </div>
                                <br />
                                <h4>KenPom</h4>
                                <div>
                                    <div><strong>Eff: </strong><span :class='{ "text-success": (team1 && team2.kenpom.efficiency > team1.kenpom.efficiency), "text-danger": (team1 && team2.kenpom.efficiency < team1.kenpom.efficiency) }'>{{team2.kenpom.efficiency}}</span></div>
                                    <div><strong>Off Eff: </strong><span :class='{ "text-success": (team1 && team2.kenpom.offensiveEff > team1.kenpom.offensiveEff), "text-danger": (team1 && team2.kenpom.offensiveEff < team1.kenpom.offensiveEff) }'>{{team2.kenpom.offensiveEff}}</span></div>
                                    <div><strong>Def Eff: </strong><span :class='{ "text-success": (team1 && team2.kenpom.defensiveEff < team1.kenpom.defensiveEff), "text-danger": (team1 && team2.kenpom.defensiveEff > team1.kenpom.defensiveEff) }'>{{team2.kenpom.defensiveEff}}</span></div>
                                    <div><strong>Tempo: </strong>{{team2.kenpom.tempo}}</div>
                                    <div><strong>Luck: </strong><span :class='{ "text-success": (team1 && team2.kenpom.luck > team1.kenpom.luck), "text-danger": (team1 && team2.kenpom.luck < team1.kenpom.luck) }'>{{team2.kenpom.luck}}</span></div>
                                </div>
                            </b-col>
                            <b-col auto></b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
            <b-row v-if='team1 && team2'>
                <b-col>
                    <b-card title="Projected Lines">
                        <b-row>
                            <b-col>
                                <div>
                                    <p class='text-muted'>Note: These are approximations and may
                                        not perfectly match the official sites.</p>
                                </div>
                                <div><strong>Torvik: </strong>{{torvikWinner}} {{-torvikLine}}
                                    ({{torvikProb}}%)</div>
                                <div><strong>Kenpom: </strong>{{kenpomWinner}} {{-kenpomLine}}
                                    ({{kenpomProb}}%)</div>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation.vue';
    import Autocomplete from '@/components/Autocomplete.vue';
    import erf from 'math-erf';

    export default {
        components: {
            Navigation,
            Autocomplete
        },
        data() {
            return {
                teams: [],
                team1: null,
                team2: null
            }
        },
        methods: {
            setTeam1(team) {
                this.$axios.get('api/info', {
                    params: {
                        team
                    }
                }).then(result => {
                    this.team1 = result.data;
                });
            },
            setTeam2(team) {
                this.$axios.get('api/info', {
                    params: {
                        team
                    }
                }).then(result => {
                    this.team2 = result.data;
                });
            }
        },
        computed: {
            kenpomLine() {
                let line = Math.abs((this.team1.kenpom.efficiency - this.team2.kenpom.efficiency) *
                    (this.team1.kenpom.tempo + this.team2.kenpom.tempo) / 200);
                return Math.round(line * 10) / 10;
            },
            kenpomWinner() {
                return this.team1.kenpom.efficiency > this.team2.kenpom.efficiency ? this.team1.name :
                    this.team2.name;
            },
            kenpomProb() {
                const prob = .5 * (1 + erf(-this.kenpomLine / (11 * Math.sqrt(2))));
                return 100 - (Math.round(prob * 1000) / 10);
            },
            torvikLine() {
                let line = Math.abs(((this.team1.torvik.offensiveEff + this.team2.torvik.defensiveEff) -
                        (this.team2.torvik.offensiveEff + this.team1.torvik.defensiveEff)) *
                    (this.team1.torvik.tempo + this.team2.torvik.tempo) / 200);
                return Math.round(line * 10) / 10;
            },
            torvikWinner() {
                return this.team1.torvik.barthag > this.team2.torvik.barthag ? this.team1.name :
                    this.team2.name;
            },
            torvikProb() {
                const prob = .5 * (1 + erf(-this.torvikLine / (11 * Math.sqrt(2))));
                return 100 - (Math.round(prob * 1000) / 10);
            }
        },
        created() {
            this.$axios.get('/api/teams').then(res => {
                this.teams = res.data;
            });
        }
    };

</script>


<style lang="scss">
    body {
        background: #dedede;
        padding-bottom: 2em;
    }

    div[class*="col-"],
    .col {
        margin-top: 2em;
    }

    .bottom-row {
        margin-bottom: 2em;
    }

    .page-container {
        margin-top: 2em;

        .title-card {
            .row {
                margin-bottom: 0;
            }

            div[class*="col-"],
            .col {
                margin-top: 0;
            }
        }
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .team-logo,
    .logo-container {
        height: 250px;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

</style>
