---
type: Model
title: Claude Opus 4.7 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: None
output_speed_tps: 53.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.0, z: 1.9, r: 78.5, estimated: false }  # 전문 지식
  reasoning: { s: 69.6, z: 1.88, r: 78.2, estimated: false }  # 추론
  coding: { s: 87.4, z: 1.73, r: 75.9, estimated: false }  # 코딩
  agentic: { s: 83.9, z: 1.85, r: 77.7, estimated: false }  # 에이전트
  trust: { s: 74.1, z: 2.19, r: 82.8, estimated: false }  # 신뢰성
  multimodal: { s: 92.8, z: 1.01, r: 65.2, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.28, r: 69.3, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.57, r: 58.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Claude Opus 4.7 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $None/1M · 53.0 t/s · TTFT 20.46s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.5 | +1.9 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 78.2 | +1.88 | 실측 | [[critpt]] 12.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 75.9 | +1.73 | 실측 | [[scicode]] 55.0%×1.0, [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 77.7 | +1.85 | 실측 | [[gdpval]] 50.0%×1.0, [[itbench]] 47.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[tau3-banking]] 29.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | 82.8 | +2.19 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | 65.2 | +1.01 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 69.3 | +1.28 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 58.5 | +0.57 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
