---
type: Model
title: K-EXAONE (non-reasoning)
creator: LG AI Research
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.1, z: -0.23, r: 46.5, estimated: false }  # 전문 지식
  reasoning: { s: 37.7, z: -0.27, r: 45.9, estimated: false }  # 추론
  coding: { s: 10.3, z: -0.92, r: 36.2, estimated: false }  # 코딩
  agentic: { s: 10.3, z: -0.83, r: 37.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 60.1, z: 0.21, r: 53.2, estimated: false }  # 긴문맥
  instruction: { s: 38.6, z: -0.61, r: 40.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K-EXAONE (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# K-EXAONE (non-reasoning)

LG AI Research · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.5 | -0.23 | 실측 | [[gpqa-diamond]] 69.5%×0.4, [[humanitys-last-exam]] 5.7%×0.3 |
| 추론 | 45.9 | -0.27 | 실측 | [[gpqa-diamond]] 69.5%×1.0, [[humanitys-last-exam]] 5.7%×1.0 |
| 코딩 | 36.2 | -0.92 | 실측 | [[terminal-bench]] 6.8%×0.5 |
| 에이전트 | 37.5 | -0.83 | 실측 | [[terminal-bench]] 6.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.2 | +0.21 | 실측 | [[aa-lcr]] 53.3%×1.0 |
| 지시 따르기 | 40.9 | -0.61 | 실측 | [[ifbench]] 39.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
