---
type: Model
title: DeepSeek V4 Pro (max)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.6455
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.5, z: 1.28, r: 69.2, estimated: false }  # 전문 지식
  reasoning: { s: 70.5, z: 1.34, r: 70.1, estimated: false }  # 추론
  coding: { s: 71.5, z: 1.13, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 62.0, z: 0.92, r: 63.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 0.93, r: 64.0, estimated: false }  # 긴문맥
  instruction: { s: 90.4, z: 1.62, r: 74.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# DeepSeek V4 Pro (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $1.31 · 출력 $3.13 · 혼합 $0.6455/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.2 | +1.28 | 실측 | [[gpqa-diamond]] 88.8%×0.4, [[humanitys-last-exam]] 37.5%×0.3 |
| 추론 | 70.1 | +1.34 | 실측 | [[gpqa-diamond]] 88.8%×1.0, [[humanitys-last-exam]] 37.5%×1.0 |
| 코딩 | 67.0 | +1.13 | 실측 | [[scicode]] 50.8%×1.0, [[terminal-bench]] 46.2%×0.5 |
| 에이전트 | 63.8 | +0.92 | 실측 | [[apex-agents]] 24.3%×1.0, [[gdpval]] 1166.0%×1.0, [[itbench]] 38.3%×1.0, [[tau3-banking]] 30.1%×1.0, [[terminal-bench]] 46.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.0 | +0.93 | 실측 | [[aa-lcr]] 74.7%×1.0 |
| 지시 따르기 | 74.3 | +1.62 | 실측 | [[ifbench]] 76.5%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
