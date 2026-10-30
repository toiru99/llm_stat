---
type: Model
title: Llama 3.1 70B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.56
output_speed_tps: 41.0
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.7, z: -1.18, r: 32.3, estimated: false }  # 전문 지식
  reasoning: { s: 20.5, z: -1.14, r: 32.9, estimated: false }  # 추론
  coding: { s: 4.5, z: -1.09, r: 33.6, estimated: false }  # 코딩
  agentic: { s: 4.5, z: -1.02, r: 34.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 20.9, z: -0.94, r: 35.9, estimated: true }  # 긴문맥
  instruction: { s: 31.0, z: -0.91, r: 36.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Llama 3.1 70B

Meta · Open · Medium · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.56 · 출력 $0.56 · 혼합 $0.56/1M · 41.0 t/s · TTFT 2.07s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.3 | -1.18 | 실측 | [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 32.9 | -1.14 | 실측 | [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.6 | -1.09 | 실측 | [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 34.7 | -1.02 | 실측 | [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.9 | -0.94 | 추정 | (추정) |
| 지시 따르기 | 36.3 | -0.91 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
