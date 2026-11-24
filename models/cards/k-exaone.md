---
type: Model
title: K-EXAONE
creator: LG AI Research
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: 236
is_reasoning: true
radar:
  knowledge: { s: 52.8, z: 0.29, r: 54.4, estimated: false }  # 전문 지식
  reasoning: { s: 33.3, z: -0.09, r: 48.6, estimated: false }  # 추론
  coding: { s: 34.5, z: -0.22, r: 46.7, estimated: false }  # 코딩
  agentic: { s: 47.9, z: 0.03, r: 50.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.2, z: 0.35, r: 55.2, estimated: false }  # 긴문맥
  instruction: { s: 73.8, z: 0.97, r: 64.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K-EXAONE
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# K-EXAONE

LG AI Research · Open · Large(236B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.4 | +0.29 | 실측 | [[gpqa-diamond]] 78.2828%×0.4, [[humanitys-last-exam]] 13.9481%×0.3 |
| 추론 | 48.6 | -0.09 | 실측 | [[critpt]] 1.11837%×1.0, [[gpqa-diamond]] 78.2828%×1.0, [[humanitys-last-exam]] 13.9481%×1.0 |
| 코딩 | 46.7 | -0.22 | 실측 | [[terminal-bench]] 22.7273%×0.5 |
| 에이전트 | 50.4 | +0.03 | 실측 | [[gdpval]] 374.35 Elo×1.0, [[tau2-bench]] 74.269%×1.0, [[terminal-bench]] 22.7273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.2 | +0.35 | 실측 | [[aa-lcr]] 61.3333%×1.0 |
| 지시 따르기 | 64.6 | +0.97 | 실측 | [[ifbench]] 64.6939%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
