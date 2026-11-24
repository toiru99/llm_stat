---
type: Model
title: MiniCPM5-1B (non-reasoning)
creator: OpenBMB
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Tiny
params_b: 1
is_reasoning: false
radar:
  knowledge: { s: 13.3, z: -1.63, r: 25.6, estimated: false }  # 전문 지식
  reasoning: { s: 8.2, z: -1.34, r: 29.9, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 41.6, z: -0.19, r: 47.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 5.6, z: -1.6, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.75, r: 38.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniCPM5-1B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# MiniCPM5-1B (non-reasoning)

OpenBMB · Open · Tiny(1B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 25.6 | -1.63 | 실측 | [[gpqa-diamond]] 26.8687%×0.4, [[humanitys-last-exam]] 4.54124%×0.3 |
| 추론 | 29.9 | -1.34 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 26.8687%×1.0, [[humanitys-last-exam]] 4.54124%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 47.1 | -0.19 | 실측 | [[tau2-bench]] 82.4561%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.1 | -1.6 | 실측 | [[aa-lcr]] 5%×1.0 |
| 지시 따르기 | 38.7 | -0.75 | 실측 | [[ifbench]] 35.1701%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
