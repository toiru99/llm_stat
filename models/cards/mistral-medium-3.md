---
type: Model
title: Mistral Medium 3
creator: Mistral
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: 0.56
output_speed_tps: 47.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 31.1, z: -0.44, r: 43.3, estimated: false }  # 전문 지식
  reasoning: { s: 21.0, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 38.7, z: -0.31, r: 45.4, estimated: false }  # 코딩
  agentic: { s: 15.2, z: -0.81, r: 37.8, estimated: false }  # 에이전트
  trust: { s: 44.7, z: 0.81, r: 62.1, estimated: false }  # 신뢰성
  multimodal: { s: 55.1, z: -0.78, r: 38.3, estimated: false }  # 멀티모달
  long_context: { s: 36.8, z: -0.34, r: 44.9, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.58, r: 41.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Mistral Medium 3

Mistral · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.4 · 출력 $2.0 · 혼합 $0.56/1M · 47.0 t/s · TTFT 1.43s · 128k ctx` · 가성비 21.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.3 | -0.44 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 45.4 | -0.31 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 37.8 | -0.81 | 실측 | [[tau2-bench]] 24.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 62.1 | +0.81 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 38.3 | -0.78 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 44.9 | -0.34 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 41.2 | -0.58 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
