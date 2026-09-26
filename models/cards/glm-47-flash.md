---
type: Model
title: GLM-4.7-Flash
creator: Z AI
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.061
output_speed_tps: 69.0
context_window: 200000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 29.2, z: -0.59, r: 41.2, estimated: false }  # 전문 지식
  reasoning: { s: 22.5, z: -0.61, r: 40.8, estimated: false }  # 추론
  coding: { s: 33.3, z: -0.06, r: 49.1, estimated: false }  # 코딩
  agentic: { s: 66.7, z: 1.11, r: 66.7, estimated: false }  # 에이전트
  trust: { s: 4.1, z: -1.01, r: 34.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.2, z: -0.1, r: 48.4, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.65, r: 59.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# GLM-4.7-Flash

Z AI · Open · Small · 컨텍스트 200k · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.07 · 출력 $0.4 · 혼합 $0.061/1M · 69.0 t/s · TTFT 1.36s · 200k ctx` · 가성비 245.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.2 | -0.59 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 40.8 | -0.61 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 49.1 | -0.06 | 실측 | [[terminal-bench]] 22.0%×0.5 |
| 에이전트 | 66.7 | +1.11 | 실측 | [[tau2-bench]] 99.0%×1.0, [[terminal-bench]] 22.0%×1.0 |
| 신뢰성 | 34.9 | -1.01 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.4 | -0.1 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 59.7 | +0.65 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
