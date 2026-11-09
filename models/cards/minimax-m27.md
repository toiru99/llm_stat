---
type: Model
title: MiniMax-M2.7
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: 0.222
output_speed_tps: None
context_window: 205000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.5, z: 0.98, r: 64.7, estimated: false }  # 전문 지식
  reasoning: { s: 68.5, z: 1.03, r: 65.5, estimated: false }  # 추론
  coding: { s: 67.9, z: 1.02, r: 65.2, estimated: false }  # 코딩
  agentic: { s: 40.2, z: 0.2, r: 53.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 89.3, z: 1.55, r: 73.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# MiniMax-M2.7

MiniMax · Open · Large · 컨텍스트 205k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · None t/s · TTFT Nones · 205k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.7 | +0.98 | 실측 | [[gpqa-diamond]] 87.4%×0.4, [[humanitys-last-exam]] 29.6%×0.3 |
| 추론 | 65.5 | +1.03 | 실측 | [[gpqa-diamond]] 87.4%×1.0, [[humanitys-last-exam]] 29.6%×1.0 |
| 코딩 | 65.2 | +1.02 | 실측 | [[scicode]] 50.1%×1.0, [[terminal-bench]] 39.4%×0.5 |
| 에이전트 | 53.0 | +0.2 | 실측 | [[apex-agents]] 10.6%×1.0, [[gdpval]] 1016.0%×1.0, [[itbench]] 26.5%×1.0, [[tau3-banking]] 9.9%×1.0, [[terminal-bench]] 39.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 78.3%×1.0 |
| 지시 따르기 | 73.2 | +1.55 | 실측 | [[ifbench]] 75.7%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
