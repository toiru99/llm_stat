---
type: Model
title: Qwen3 Coder 480B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.4075
output_speed_tps: 71.0
context_window: 262000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.4, z: -0.53, r: 42.1, estimated: false }  # 전문 지식
  reasoning: { s: 33.6, z: -0.54, r: 41.8, estimated: false }  # 추론
  coding: { s: 28.8, z: -0.28, r: 45.8, estimated: false }  # 코딩
  agentic: { s: 28.8, z: -0.19, r: 47.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.7, z: -0.02, r: 49.7, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.56, r: 41.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder 480B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Qwen3 Coder 480B

Alibaba · Open · Large · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.38 · 출력 $1.4 · 혼합 $0.4075/1M · 71.0 t/s · TTFT 1.1s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.1 | -0.53 | 실측 | [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.8 | -0.54 | 실측 | [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 45.8 | -0.28 | 실측 | [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 47.2 | -0.19 | 실측 | [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.7 | -0.02 | 실측 | [[aa-lcr]] 46.0%×1.0 |
| 지시 따르기 | 41.7 | -0.56 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
