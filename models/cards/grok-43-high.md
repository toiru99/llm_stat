---
type: Model
title: Grok 4.3 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.2, z: 1.3, r: 69.5, estimated: false }  # 전문 지식
  reasoning: { s: 71.1, z: 1.35, r: 70.3, estimated: false }  # 추론
  coding: { s: 64.6, z: 0.89, r: 63.4, estimated: false }  # 코딩
  agentic: { s: 45.0, z: 0.34, r: 55.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.1, z: 0.69, r: 60.4, estimated: false }  # 멀티모달
  long_context: { s: 82.3, z: 0.87, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.89, r: 78.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Grok 4.3 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.5 | +1.3 | 실측 | [[gpqa-diamond]] 90.1%×0.4, [[humanitys-last-exam]] 37.2%×0.3 |
| 추론 | 70.3 | +1.35 | 실측 | [[gpqa-diamond]] 90.1%×1.0, [[humanitys-last-exam]] 37.2%×1.0 |
| 코딩 | 63.4 | +0.89 | 실측 | [[scicode]] 48.3%×1.0, [[terminal-bench]] 37.9%×0.5 |
| 에이전트 | 55.1 | +0.34 | 실측 | [[apex-agents]] 17.0%×1.0, [[gdpval]] 946.0%×1.0, [[itbench]] 32.7%×1.0, [[tau3-banking]] 12.4%×1.0, [[terminal-bench]] 37.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.4 | +0.69 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 63.1 | +0.87 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 78.4 | +1.89 | 실측 | [[ifbench]] 81.3%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
