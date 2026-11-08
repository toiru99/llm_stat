---
type: Model
title: Claude Opus 4.7 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.2, z: 1.5, r: 72.4, estimated: false }  # 전문 지식
  reasoning: { s: 81.3, z: 1.61, r: 74.2, estimated: false }  # 추론
  coding: { s: 78.1, z: 1.36, r: 70.4, estimated: false }  # 코딩
  agentic: { s: 75.3, z: 1.4, r: 71.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.76, r: 61.4, estimated: false }  # 멀티모달
  long_context: { s: 88.7, z: 1.08, r: 66.2, estimated: false }  # 긴문맥
  instruction: { s: 65.3, z: 0.52, r: 57.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Claude Opus 4.7 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.4 | +1.5 | 실측 | [[gpqa-diamond]] 91.4%×0.4, [[humanitys-last-exam]] 42.3%×0.3 |
| 추론 | 74.2 | +1.61 | 실측 | [[gpqa-diamond]] 91.4%×1.0, [[humanitys-last-exam]] 42.3%×1.0 |
| 코딩 | 70.4 | +1.36 | 실측 | [[terminal-bench]] 51.5%×0.5 |
| 에이전트 | 71.1 | +1.4 | 실측 | [[gdpval]] 1362.0%×1.0, [[itbench]] 46.7%×1.0, [[tau3-banking]] 34.6%×1.0, [[terminal-bench]] 51.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.4 | +0.76 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 66.2 | +1.08 | 실측 | [[aa-lcr]] 78.7%×1.0 |
| 지시 따르기 | 57.9 | +0.52 | 실측 | [[ifbench]] 58.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
