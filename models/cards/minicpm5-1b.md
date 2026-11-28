---
type: Model
title: MiniCPM5-1B
creator: OpenBMB
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Tiny
params_b: 1
is_reasoning: true
radar:
  knowledge: { s: 15.1, z: -1.54, r: 26.9, estimated: false }  # 전문 지식
  reasoning: { s: 9.4, z: -1.28, r: 30.8, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 40.9, z: -0.22, r: 46.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.8, z: -1.56, r: 26.6, estimated: false }  # 긴문맥
  instruction: { s: 52.2, z: 0.07, r: 51.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniCPM5-1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# MiniCPM5-1B

OpenBMB · Open · Tiny(1B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 26.9 | -1.54 | 실측 | [[gpqa-diamond]] 27.7778%×0.4, [[humanitys-last-exam]] 6.48749%×0.3 |
| 추론 | 30.8 | -1.28 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 27.7778%×1.0, [[humanitys-last-exam]] 6.48749%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 46.7 | -0.22 | 실측 | [[tau2-bench]] 80.9942%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.6 | -1.56 | 실측 | [[aa-lcr]] 6%×1.0 |
| 지시 따르기 | 51.1 | +0.07 | 실측 | [[ifbench]] 49.3197%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
