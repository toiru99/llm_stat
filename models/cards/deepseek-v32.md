---
type: Model
title: DeepSeek V3.2
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1078
output_speed_tps: 39.930432990779614
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.8, z: 0.76, r: 61.4, estimated: false }  # 전문 지식
  reasoning: { s: 42.0, z: 0.33, r: 54.9, estimated: false }  # 추론
  coding: { s: 54.0, z: 0.49, r: 57.3, estimated: false }  # 코딩
  agentic: { s: 64.7, z: 0.7, r: 60.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.7, z: 0.87, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 68.2, z: 0.61, r: 59.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# DeepSeek V3.2

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 추론

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.1078/1M · 39.930432990779614 t/s · TTFT 3.59388081244306s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.4 | +0.76 | 실측 | [[gpqa-diamond]] 84.040404040404%×0.4, [[humanitys-last-exam]] 24.5597775718258%×0.3 |
| 추론 | 54.9 | +0.33 | 실측 | [[critpt]] 2.85714285714286%×1.0, [[gpqa-diamond]] 84.040404040404%×1.0, [[humanitys-last-exam]] 24.5597775718258%×1.0 |
| 코딩 | 57.3 | +0.49 | 실측 | [[terminal-bench]] 35.6060606060606%×0.5 |
| 에이전트 | 60.4 | +0.7 | 실측 | [[gdpval]] 699.01%×1.0, [[tau2-bench]] 90.6432748538012%×1.0, [[terminal-bench]] 35.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.1 | +0.87 | 실측 | [[aa-lcr]] 73.3333333333333%×1.0 |
| 지시 따르기 | 59.1 | +0.61 | 실측 | [[ifbench]] 60.6802721088435%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
