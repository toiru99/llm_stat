---
type: Model
title: Solar Pro 2
creator: Upstage
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65500
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.4, z: -0.21, r: 46.8, estimated: false }  # 전문 지식
  reasoning: { s: 26.8, z: -0.39, r: 44.2, estimated: false }  # 추론
  coding: { s: 34.8, z: -0.53, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 16.4, z: -0.8, r: 38.0, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -1.0, r: 35.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.72, r: 39.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Solar Pro 2

Upstage · Proprietary · Unknown · 컨텍스트 65k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 신뢰성, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.8 | -0.21 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 44.2 | -0.39 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 42.0 | -0.53 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 38.0 | -0.8 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 35.1 | -1.0 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.3 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 39.2 | -0.72 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
