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
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.0, z: -0.21, r: 46.9, estimated: false }  # 전문 지식
  reasoning: { s: 26.5, z: -0.45, r: 43.3, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.24, r: 31.4, estimated: false }  # 코딩
  agentic: { s: 15.7, z: -1.01, r: 34.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.4, z: -1.22, r: 31.7, estimated: false }  # 긴문맥
  instruction: { s: 59.4, z: 0.23, r: 53.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Falcon-H1R-7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Falcon-H1R-7B

TII UAE · Open · Small · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.9 | -0.21 | 실측 | [[gpqa-diamond]] 66.06060606060609%×0.4, [[humanitys-last-exam]] 10.982391102873%×0.3 |
| 추론 | 43.3 | -0.45 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 66.06060606060609%×1.0, [[humanitys-last-exam]] 10.982391102873%×1.0 |
| 코딩 | 31.4 | -1.24 | 실측 | [[terminal-bench]] 2.27272727272727%×0.5 |
| 에이전트 | 34.9 | -1.01 | 실측 | [[tau2-bench]] 27.7777777777778%×1.0, [[terminal-bench]] 2.27272727272727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.7 | -1.22 | 실측 | [[aa-lcr]] 11.0%×1.0 |
| 지시 따르기 | 53.5 | +0.23 | 실측 | [[ifbench]] 54.421768707483%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
