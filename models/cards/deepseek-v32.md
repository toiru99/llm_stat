---
type: Model
title: DeepSeek V3.2
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1078
output_speed_tps: 33.166136032943854
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.8, z: 0.75, r: 61.2, estimated: false }  # 전문 지식
  reasoning: { s: 42.0, z: 0.32, r: 54.7, estimated: false }  # 추론
  coding: { s: 54.0, z: 0.47, r: 57.1, estimated: false }  # 코딩
  agentic: { s: 64.7, z: 0.68, r: 60.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.7, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 68.2, z: 0.6, r: 59.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# DeepSeek V3.2

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 추론

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.1078/1M · 33.166136032943854 t/s · TTFT 2.973520841611135s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.2 | +0.75 | 실측 | [[gpqa-diamond]] 84.040404040404%×0.4, [[humanitys-last-exam]] 24.5597775718258%×0.3 |
| 추론 | 54.7 | +0.32 | 실측 | [[critpt]] 2.85714285714286%×1.0, [[gpqa-diamond]] 84.040404040404%×1.0, [[humanitys-last-exam]] 24.5597775718258%×1.0 |
| 코딩 | 57.1 | +0.47 | 실측 | [[terminal-bench]] 35.6060606060606%×0.5 |
| 에이전트 | 60.3 | +0.68 | 실측 | [[gdpval]] 699.01%×1.0, [[tau2-bench]] 90.6432748538012%×1.0, [[terminal-bench]] 35.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 73.3333333333333%×1.0 |
| 지시 따르기 | 59.0 | +0.6 | 실측 | [[ifbench]] 60.6802721088435%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
