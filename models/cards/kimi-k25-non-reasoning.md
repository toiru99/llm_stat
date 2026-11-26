---
type: Model
title: Kimi K2.5 (non-reasoning)
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.84
output_speed_tps: 44.6650095910763
context_window: 256000
status: past
size_class: Large
params_b: 1000
is_reasoning: false
radar:
  knowledge: { s: 52.7, z: 0.29, r: 54.3, estimated: false }  # 전문 지식
  reasoning: { s: 32.7, z: -0.12, r: 48.1, estimated: false }  # 추론
  coding: { s: 28.7, z: -0.42, r: 43.8, estimated: false }  # 코딩
  agentic: { s: 55.4, z: 0.29, r: 54.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.1, z: 0.34, r: 55.1, estimated: false }  # 멀티모달
  long_context: { s: 75.9, z: 0.56, r: 58.4, estimated: false }  # 긴문맥
  instruction: { s: 44.3, z: -0.25, r: 46.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Kimi K2.5 (non-reasoning)

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.6 · 출력 $3.0 · 혼합 $0.84/1M · 44.6650095910763 t/s · TTFT 3.05262517049636s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.3 | +0.29 | 실측 | [[gpqa-diamond]] 78.8889%×0.4, [[humanitys-last-exam]] 13.1603%×0.3 |
| 추론 | 48.1 | -0.12 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 78.8889%×1.0, [[humanitys-last-exam]] 13.1603%×1.0 |
| 코딩 | 43.8 | -0.42 | 실측 | [[terminal-bench]] 18.9394%×0.5 |
| 에이전트 | 54.4 | +0.29 | 실측 | [[tau2-bench]] 81.2865%×1.0, [[terminal-bench]] 18.9394%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.1 | +0.34 | 실측 | [[mmmu-pro]] 73.0636%×1.0 |
| 긴문맥 | 58.4 | +0.56 | 실측 | [[aa-lcr]] 67.3333%×1.0 |
| 지시 따르기 | 46.2 | -0.25 | 실측 | [[ifbench]] 43.6735%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
