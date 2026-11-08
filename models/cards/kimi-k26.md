---
type: Model
title: Kimi K2.6
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.702
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 79.6, z: 1.34, r: 70.0, estimated: false }  # 전문 지식
  reasoning: { s: 77.2, z: 1.42, r: 71.4, estimated: false }  # 추론
  coding: { s: 71.8, z: 1.15, r: 67.2, estimated: false }  # 코딩
  agentic: { s: 56.6, z: 0.76, r: 61.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.76, r: 61.4, estimated: false }  # 멀티모달
  long_context: { s: 91.3, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 89.7, z: 1.56, r: 73.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Kimi K2.6

Kimi · Open · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.702/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.0 | +1.34 | 실측 | [[gpqa-diamond]] 91.1%×0.4, [[humanitys-last-exam]] 37.5%×0.3 |
| 추론 | 71.4 | +1.42 | 실측 | [[gpqa-diamond]] 91.1%×1.0, [[humanitys-last-exam]] 37.5%×1.0 |
| 코딩 | 67.2 | +1.15 | 실측 | [[scicode]] 51.5%×1.0, [[terminal-bench]] 43.9%×0.5 |
| 에이전트 | 61.4 | +0.76 | 실측 | [[apex-agents]] 28.5%×1.0, [[gdpval]] 1047.0%×1.0, [[itbench]] 31.2%×1.0, [[tau3-banking]] 23.3%×1.0, [[terminal-bench]] 43.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.4 | +0.76 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 73.4 | +1.56 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
