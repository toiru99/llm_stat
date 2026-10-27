---
type: Model
title: Claude Opus 4.8 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 3.85
output_speed_tps: 61.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.6, z: 1.68, r: 75.3, estimated: false }  # 전문 지식
  reasoning: { s: 79.7, z: 1.92, r: 78.8, estimated: false }  # 추론
  coding: { s: 81.5, z: 1.47, r: 72.1, estimated: false }  # 코딩
  agentic: { s: 77.5, z: 1.47, r: 72.1, estimated: false }  # 에이전트
  trust: { s: 60.8, z: 1.52, r: 72.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.04, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.68, r: 60.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.8 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Claude Opus 4.8 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 61.0 t/s · TTFT 43.0s · 1M ctx` · 가성비 10.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.3 | +1.68 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 78.8 | +1.92 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 72.1 | +1.47 | 실측 | [[scicode]] 54.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 72.1 | +1.47 | 실측 | [[gdpval]] 1454.0%×1.0, [[tau3-banking]] 34.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 72.8 | +1.52 | 실측 | [[aa-omniscience]] 61.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.7 | +1.04 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 60.2 | +0.68 | 실측 | [[ifbench]] 62.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
