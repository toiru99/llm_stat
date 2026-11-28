---
type: Model
title: Falcon-H1R-7B
creator: TII UAE
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: 7
is_reasoning: true
radar:
  knowledge: { s: 43.0, z: -0.18, r: 47.2, estimated: false }  # 전문 지식
  reasoning: { s: 26.5, z: -0.43, r: 43.5, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 15.7, z: -1.11, r: 33.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.4, z: -1.39, r: 29.2, estimated: false }  # 긴문맥
  instruction: { s: 59.4, z: 0.37, r: 55.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Falcon-H1R-7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Falcon-H1R-7B

TII UAE · Open · Small(7B) · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 47.2 | -0.18 | 실측 | [[gpqa-diamond]] 66.0606%×0.4, [[humanitys-last-exam]] 10.9824%×0.3 |
| 추론 | 43.5 | -0.43 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 66.0606%×1.0, [[humanitys-last-exam]] 10.9824%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 33.4 | -1.11 | 실측 | [[tau2-bench]] 27.7778%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.2 | -1.39 | 실측 | [[aa-lcr]] 11%×1.0 |
| 지시 따르기 | 55.6 | +0.37 | 실측 | [[ifbench]] 54.4218%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
