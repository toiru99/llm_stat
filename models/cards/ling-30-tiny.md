---
type: Model
title: Ling 3.0 Tiny
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: 172.622190808753
context_window: 262144
status: current
size_class: Small
params_b: 7.9
is_reasoning: true
radar:
  knowledge: { s: 46.9, z: 0.01, r: 50.1, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.34, r: 44.9, estimated: false }  # 추론
  coding: { s: 28.4, z: -0.43, r: 43.6, estimated: false }  # 코딩
  agentic: { s: 41.5, z: -0.2, r: 47.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.0, z: 0.32, r: 54.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Tiny
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Ling 3.0 Tiny

InclusionAI · Open · Small(7.9B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 172.622190808753 t/s · TTFT 3.6175140860701s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.1 | +0.01 | 실측 | [[gpqa-diamond]] 73.4343%×0.4, [[humanitys-last-exam]] 9.31418%×0.3 |
| 추론 | 44.9 | -0.34 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 73.4343%×1.0, [[humanitys-last-exam]] 9.31418%×1.0 |
| 코딩 | 43.6 | -0.43 | 실측 | [[scicode]] 24.1898%×1.0 |
| 에이전트 | 47.1 | -0.2 | 실측 | [[gdpval]] 567.85 Elo×1.0, [[tau3-banking]] 20.8247%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.7 | +0.32 | 실측 | [[aa-lcr]] 60.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
