---
type: Model
title: Kimi K2.6 (non-reasoning)
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.702
output_speed_tps: 33.16402722096655
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.4, z: 0.45, r: 56.8, estimated: false }  # 전문 지식
  reasoning: { s: 36.3, z: 0.05, r: 50.7, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.6, r: 59.1, estimated: false }  # 코딩
  agentic: { s: 76.1, z: 1.09, r: 66.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.6, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 45.2, z: -0.35, r: 44.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Kimi K2.6 (non-reasoning)

Kimi · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.702/1M · 33.16402722096655 t/s · TTFT 8.072709489288906s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.8 | +0.45 | 실측 | [[gpqa-diamond]] 78.7878787878788%×0.4, [[humanitys-last-exam]] 19.5551436515292%×0.3 |
| 추론 | 50.7 | +0.05 | 실측 | [[critpt]] 1.42857142857143%×1.0, [[gpqa-diamond]] 78.7878787878788%×1.0, [[humanitys-last-exam]] 19.5551436515292%×1.0 |
| 코딩 | 59.1 | +0.6 | 실측 | [[terminal-bench]] 37.878787878787904%×0.5 |
| 에이전트 | 66.4 | +1.09 | 실측 | [[tau2-bench]] 93.859649122807%×1.0, [[terminal-bench]] 37.878787878787904%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 69.6666666666667%×1.0 |
| 지시 따르기 | 44.7 | -0.35 | 실측 | [[ifbench]] 44.2857142857143%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
