---
type: Model
title: Claude Sonnet 4.6 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 2.31
output_speed_tps: 59.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.1, z: 1.26, r: 68.9, estimated: false }  # 전문 지식
  reasoning: { s: 51.9, z: 0.81, r: 62.2, estimated: false }  # 추론
  coding: { s: 80.3, z: 1.68, r: 75.2, estimated: false }  # 코딩
  agentic: { s: 69.3, z: 1.22, r: 68.3, estimated: false }  # 에이전트
  trust: { s: 51.5, z: 1.28, r: 69.1, estimated: false }  # 신뢰성
  multimodal: { s: 80.6, z: 0.51, r: 57.7, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.26, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.45, r: 56.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Claude Sonnet 4.6 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 59.0 t/s · TTFT 119.94s · 1M ctx` · 가성비 16.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.9 | +1.26 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 62.2 | +0.81 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 75.2 | +1.68 | 실측 | [[terminal-bench]] 53.0%×0.5 |
| 에이전트 | 68.3 | +1.22 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 40.0%×1.0, [[itbench]] 40.0%×1.0, [[tau2-bench]] 76.0%×1.0, [[tau3-banking]] 34.0%×1.0, [[terminal-bench]] 53.0%×1.0 |
| 신뢰성 | 69.1 | +1.28 | 실측 | [[aa-omniscience]] 52.0%×1.0 |
| 멀티모달 | 57.7 | +0.51 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 68.8 | +1.26 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 56.7 | +0.45 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
