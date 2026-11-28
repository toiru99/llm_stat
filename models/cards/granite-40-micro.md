---
type: Model
title: Granite 4.0 Micro
creator: IBM
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Tiny
params_b: 3
is_reasoning: false
radar:
  knowledge: { s: 18.1, z: -1.4, r: 29.1, estimated: false }  # 전문 지식
  reasoning: { s: 11.0, z: -1.2, r: 32.0, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.31, r: 30.4, estimated: false }  # 코딩
  agentic: { s: 7.5, z: -1.4, r: 29.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.9, z: -1.53, r: 27.1, estimated: false }  # 긴문맥
  instruction: { s: 17.8, z: -1.36, r: 29.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.0 Micro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Granite 4.0 Micro

IBM · Open · Tiny(3B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 29.1 | -1.4 | 실측 | [[gpqa-diamond]] 33.6364%×0.4, [[humanitys-last-exam]] 5.00463%×0.3 |
| 추론 | 32.0 | -1.2 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 33.6364%×1.0, [[humanitys-last-exam]] 5.00463%×1.0 |
| 코딩 | 30.4 | -1.31 | 실측 | [[terminal-bench]] 1.51515%×0.5 |
| 에이전트 | 29.0 | -1.4 | 실측 | [[tau2-bench]] 12.5731%×1.0, [[terminal-bench]] 1.51515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.1 | -1.53 | 실측 | [[aa-lcr]] 7%×1.0 |
| 지시 따르기 | 29.6 | -1.36 | 실측 | [[ifbench]] 24.7619%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
