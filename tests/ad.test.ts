import {AdRecord} from "../records/ad.record";
import {pool} from "../utils/db";
import {AdEntity} from "../types";

afterAll(async () => {
    await pool.end();
})

test('AdRecord.getOne returns data from database for one entry.', async () => {
    const ad = await AdRecord.getOne('sddfgg');

    console.log(ad);
    expect(ad).toBeDefined();
    expect(ad.id).toBe('sddfgg');
    expect(ad.name).toBe('test');
});

test('AdRecord.getOne returns null from database for unexisting entry.', async () => {
    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();
});

test('AdRecord.findAll returns an array of found entries from database.', async () => {
    const ads = await AdRecord.findAll('');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
});

test('AdRecord.findAll returns an array of found entries from database when searching for t.', async () => {
    const ads = await AdRecord.findAll('t');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
})

test('AdRecord.findAll returns an empty array of found entries from database when searching for something which does not exist.', async () => {
    const ads = await AdRecord.findAll('-------------------------------');

    expect(ads).toEqual([]);

});

test('AdRecord.findAll returns smaller amount of data.', async () => {
    const ads = await AdRecord.findAll('');

    expect((ads[0] as AdEntity).price).toBeUndefined();
    expect((ads[0] as AdEntity).description).toBeUndefined();
})

