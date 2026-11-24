---
type: Model
title: Phi-4 Mini
creator: Microsoft
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0975
output_speed_tps: 17.2556438644763
context_window: 128000
status: current
size_class: Tiny
params_b: 3.8
is_reasoning: false
radar:
  knowledge: { s: 17.4, z: -1.43, r: 28.6, estimated: false }  # 전문 지식
  reasoning: { s: 10.5, z: -1.22, r: 31.6, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 2.8, z: -1.56, r: 26.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 17.3, z: -1.24, r: 31.4, estimated: false }  # 긴문맥
  instruction: { s: 12.6, z: -1.57, r: 26.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Phi-4 Mini

Microsoft · Open · Tiny(3.8B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.075 · 출력 $0.3 · 혼합 $0.0975/1M · 17.2556438644763 t/s · TTFT 4.64272602881145s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 28.6 | -1.43 | 실측 | [[gpqa-diamond]] 33.1313%×0.4, [[humanitys-last-exam]] 4.45%×0.3 |
| 추론 | 31.6 | -1.22 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 33.1313%×1.0, [[humanitys-last-exam]] 4.45%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 26.6 | -1.56 | 실측 | [[gdpval]] -401.53 Elo×1.0, [[tau2-bench]] 8.18713%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.4 | -1.24 | 실측 | [[aa-lcr]] 15.3333%×1.0 |
| 지시 따르기 | 26.4 | -1.57 | 실측 | [[ifbench]] 21.0884%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
