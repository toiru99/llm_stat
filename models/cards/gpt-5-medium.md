---
type: Model
title: GPT-5 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: 1.3375
output_speed_tps: 76.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.5, z: 0.88, r: 63.1, estimated: false }  # 전문 지식
  reasoning: { s: 42.0, z: 0.25, r: 53.8, estimated: false }  # 추론
  coding: { s: 57.6, z: 0.72, r: 60.9, estimated: false }  # 코딩
  agentic: { s: 72.7, z: 1.29, r: 69.4, estimated: false }  # 에이전트
  trust: { s: 15.5, z: -0.51, r: 42.3, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.47, r: 57.1, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.2, r: 68.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# GPT-5 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 76.0 t/s · TTFT 41.2s · 400k ctx` · 가성비 17.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.1 | +0.88 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 53.8 | +0.25 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 60.9 | +0.72 | 실측 | [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 69.4 | +1.29 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 42.3 | -0.51 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 57.1 | +0.47 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 68.0 | +1.2 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
