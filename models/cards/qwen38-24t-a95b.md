---
type: Model
title: Qwen3.8 2.4T A95B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 1.175
output_speed_tps: 41.8102667202025
context_window: 262000
status: current
size_class: Large
params_b: 2400
is_reasoning: true
radar:
  knowledge: { s: 79.6, z: 1.59, r: 73.9, estimated: false }  # 전문 지식
  reasoning: { s: 69.8, z: 1.72, r: 75.8, estimated: false }  # 추론
  coding: { s: 77.5, z: 1.23, r: 68.4, estimated: false }  # 코딩
  agentic: { s: 92.2, z: 1.59, r: 73.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 2.4T A95B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.8 2.4T A95B

Alibaba · Open · Large(2400B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 41.8102667202025 t/s · TTFT 4.84638296653024s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.9 | +1.59 | 실측 | [[gpqa-diamond]] 93.5354%×0.4, [[humanitys-last-exam]] 42.4467%×0.3 |
| 추론 | 75.8 | +1.72 | 실측 | [[critpt]] 20%×1.0, [[gpqa-diamond]] 93.5354%×1.0, [[humanitys-last-exam]] 42.4467%×1.0 |
| 코딩 | 68.4 | +1.23 | 실측 | [[scicode]] 54.0509%×1.0 |
| 에이전트 | 73.9 | +1.59 | 실측 | [[gdpval]] 1613.86 Elo×1.0, [[tau3-banking]] 49.0722%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 80.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
