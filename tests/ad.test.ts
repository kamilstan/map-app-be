import {AdRecord} from "../records/ad.record";

test('AdRecord returns data from database for one entry.', async () => {
    const ad = await AdRecord.getOne('sddfgg');

    console.log(ad);
    expect(ad).toBeDefined();
    expect(ad.id).toBe('sddfgg');
    expect(ad.name).toBe('test');
});

test('AdRecord returns null from database for unexisting entry.', async () => {
    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();
})