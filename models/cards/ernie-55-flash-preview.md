---
type: Model
title: ERNIE 5.5 Flash Preview
creator: Baidu
license: Open
intelligence_index: 31.2872256906399
price_blended_usd_1m: 0.1886
output_speed_tps: 176.506261417735
context_window: 1024000
status: current
size_class: Large
params_b: 280
is_reasoning: true
radar:
  knowledge: { s: null, z: null, r: null, estimated: false }  # 전문 지식
  reasoning: { s: null, z: null, r: null, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 92.1, z: 1.58, r: 73.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — ERNIE 5.5 Flash Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# ERNIE 5.5 Flash Preview

Baidu · Open · Large(280B) · 컨텍스트 1M · 종합지능 **31.2872256906399**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트
- **약점**: —

## 실용 지표
`입력 $0.28 · 출력 $1.13 · 혼합 $0.1886/1M · 176.506261417735 t/s · TTFT 3.65857872434999s · 1M ctx` · 가성비 165.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | — | — | 측정 안 됨 | — |
| 추론 | — | — | 측정 안 됨 | — |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 73.7 | +1.58 | 실측 | [[gdpval]] 1686.92 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
