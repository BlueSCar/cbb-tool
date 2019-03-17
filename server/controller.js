module.exports = db => ({
    getTeams: async (req, res) => {
        const teams = await db.any('SELECT torvik_name as name FROM team');

        res.send(teams.map(t => t.name).sort());
    },
    getTeamInfo: async (req, res) => {
        const info = await db.one('SELECT * FROM team WHERE torvik_name = $1', [req.query.team]);

        res.send({
            name: info.torvik_name,
            conference: info.conference,
            logo: info.logo,
            torvik: {
                barthag: info.torvik_barthag,
                offensiveEff: info.torvik_offense,
                defensiveEff: info.torvik_defense,
                tempo: info.torvik_tempo
            },
            kenpom: {
                efficiency: info.kenpom_efficiency,
                offensiveEff: info.kenpom_offense,
                defensiveEff: info.kenpom_defense,
                tempo: info.kenpom_tempo,
                luck: info.kenpom_luck
            }
        });
    }
});
