---
type: Model
title: Qwen3 VL 235B A22B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.9, z: 0.17, r: 52.6, estimated: false }  # 전문 지식
  reasoning: { s: 30.9, z: -0.23, r: 46.5, estimated: false }  # 추론
  coding: { s: 17.2, z: -0.77, r: 38.4, estimated: false }  # 코딩
  agentic: { s: 35.9, z: -0.31, r: 45.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.3, z: 0.05, r: 50.7, estimated: false }  # 멀티모달
  long_context: { s: 71.8, z: 0.54, r: 58.1, estimated: false }  # 긴문맥
  instruction: { s: 62.3, z: 0.35, r: 55.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 235B A22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Qwen3 VL 235B A22B

Alibaba · Open · Large · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.6 | +0.17 | 실측 | [[gpqa-diamond]] 77.1717171717172%×0.4, [[humanitys-last-exam]] 11.9091751621872%×0.3 |
| 추론 | 46.5 | -0.23 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.1717171717172%×1.0, [[humanitys-last-exam]] 11.9091751621872%×1.0 |
| 코딩 | 38.4 | -0.77 | 실측 | [[terminal-bench]] 11.363636363636399%×0.5 |
| 에이전트 | 45.4 | -0.31 | 실측 | [[tau2-bench]] 54.093567251462005%×1.0, [[terminal-bench]] 11.363636363636399%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 50.7 | +0.05 | 실측 | [[mmmu-pro]] 68.728323699422%×1.0 |
| 긴문맥 | 58.1 | +0.54 | 실측 | [[aa-lcr]] 63.66666666666671%×1.0 |
| 지시 따르기 | 55.3 | +0.35 | 실측 | [[ifbench]] 56.4625850340136%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
