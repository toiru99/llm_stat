---
type: Model
title: Claude Opus 4.8 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 57.0
price_blended_usd_1m: 3.85
output_speed_tps: 59.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.7, z: 2.09, r: 81.3, estimated: false }  # 전문 지식
  reasoning: { s: 83.7, z: 2.48, r: 87.3, estimated: false }  # 추론
  coding: { s: 88.2, z: 1.7, r: 75.5, estimated: false }  # 코딩
  agentic: { s: 82.8, z: 1.8, r: 77.0, estimated: false }  # 에이전트
  trust: { s: 60.8, z: 1.75, r: 76.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.18, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.76, r: 61.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.8 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Claude Opus 4.8 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **57.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 59.0 t/s · TTFT 45.85s · 1M ctx` · 가성비 14.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 81.3 | +2.09 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 87.3 | +2.48 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 75.5 | +1.7 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 77.0 | +1.8 | 실측 | [[gdpval]] 54.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 34.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 76.2 | +1.75 | 실측 | [[aa-omniscience]] 61.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.8 | +1.18 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 61.4 | +0.76 | 실측 | [[ifbench]] 62.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
