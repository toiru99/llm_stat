---
type: Model
title: Mistral Medium 3.1
creator: Mistral
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: 0.56
output_speed_tps: 129.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.1, z: -0.38, r: 44.3, estimated: false }  # 전문 지식
  reasoning: { s: 21.3, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.54, r: 41.9, estimated: false }  # 코딩
  agentic: { s: 19.6, z: -0.69, r: 39.7, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.52, r: 42.2, estimated: false }  # 신뢰성
  multimodal: { s: 54.2, z: -0.79, r: 38.1, estimated: false }  # 멀티모달
  long_context: { s: 30.8, z: -0.56, r: 41.6, estimated: true }  # 긴문맥
  instruction: { s: 39.4, z: -0.55, r: 41.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Mistral Medium 3.1

Mistral · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 신뢰성
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.4 · 출력 $2.0 · 혼합 $0.56/1M · 129.0 t/s · TTFT 2.25s · 128k ctx` · 가성비 14.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.3 | -0.38 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 41.9 | -0.54 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 39.7 | -0.69 | 실측 | [[gdpval]] 3.0%×1.0, [[tau2-bench]] 41.0%×1.0, [[tau3-banking]] 8.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 42.2 | -0.52 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 38.1 | -0.79 | 실측 | [[mmmu-pro]] 54.0%×1.0 |
| 긴문맥 | 41.6 | -0.56 | 추정 | (추정) |
| 지시 따르기 | 41.8 | -0.55 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
