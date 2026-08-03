---
type: Model
title: Claude Opus 4.8 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: None
output_speed_tps: 57.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.3, z: 1.98, r: 79.7, estimated: false }  # 전문 지식
  reasoning: { s: 83.3, z: 2.45, r: 86.8, estimated: false }  # 추론
  coding: { s: 88.2, z: 1.71, r: 75.7, estimated: false }  # 코딩
  agentic: { s: 86.5, z: 1.95, r: 79.2, estimated: false }  # 에이전트
  trust: { s: 72.4, z: 2.1, r: 81.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.71, r: 60.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.8 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Claude Opus 4.8 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 신뢰성
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $None/1M · 57.0 t/s · TTFT 17.25s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.7 | +1.98 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 86.8 | +2.45 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 75.7 | +1.71 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 79.2 | +1.95 | 실측 | [[gdpval]] 55.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 28.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 81.5 | +2.1 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 60.7 | +0.71 | 실측 | [[ifbench]] 62.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
