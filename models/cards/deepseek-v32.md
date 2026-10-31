---
type: Model
title: DeepSeek V3.2
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1078
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.3, z: 0.75, r: 61.2, estimated: false }  # 전문 지식
  reasoning: { s: 63.0, z: 0.78, r: 61.8, estimated: false }  # 추론
  coding: { s: 54.5, z: 0.58, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 40.8, z: 0.23, r: 53.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.68, r: 60.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# DeepSeek V3.2

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.1078/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.2 | +0.75 | 실측 | [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 61.8 | +0.78 | 실측 | [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 58.8 | +0.58 | 실측 | [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 53.4 | +0.23 | 실측 | [[apex-agents]] 15.0%×1.0, [[gdpval]] 699.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 60.2 | +0.68 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
