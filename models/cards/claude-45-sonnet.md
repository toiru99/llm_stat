---
type: Model
title: Claude 4.5 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 2.31
output_speed_tps: 40.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.3, z: 0.77, r: 61.5, estimated: false }  # 전문 지식
  reasoning: { s: 40.3, z: 0.36, r: 55.4, estimated: false }  # 추론
  coding: { s: 68.2, z: 0.94, r: 64.0, estimated: false }  # 코딩
  agentic: { s: 58.8, z: 0.89, r: 63.3, estimated: false }  # 에이전트
  trust: { s: 61.2, z: 1.58, r: 73.7, estimated: false }  # 신뢰성
  multimodal: { s: 78.3, z: 0.33, r: 54.9, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.46, r: 56.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-15
timestamp: 2026-07-15T00:00:00Z
---

# Claude 4.5 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 40.0 t/s · TTFT 11.32s · 1M ctx` · 가성비 15.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.5 | +0.77 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 55.4 | +0.36 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 64.0 | +0.94 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 63.3 | +0.89 | 실측 | [[gdpval]] 28.0%×1.0, [[tau2-bench]] 78.0%×1.0, [[tau3-banking]] 19.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 73.7 | +1.58 | 실측 | [[aa-omniscience]] 53.0%×1.0 |
| 멀티모달 | 54.9 | +0.33 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 56.9 | +0.46 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
