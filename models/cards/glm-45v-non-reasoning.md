---
type: Model
title: GLM-4.5V (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.377
output_speed_tps: 38.4576994658857
context_window: 64000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.8, z: -0.7, r: 39.5, estimated: false }  # 전문 지식
  reasoning: { s: 19.4, z: -0.8, r: 38.0, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.01, r: 34.9, estimated: false }  # 코딩
  agentic: { s: 15.1, z: -1.03, r: 34.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 37.7, z: -1.72, r: 24.2, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 23.2, z: -1.28, r: 30.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5V (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GLM-4.5V (non-reasoning)

Z AI · Open · Medium · 컨텍스트 64k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.377/1M · 38.4576994658857 t/s · TTFT 5.46672352853669s · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.5 | -0.7 | 실측 | [[gpqa-diamond]] 57.272727272727295%×0.4, [[humanitys-last-exam]] 3.47544022242817%×0.3 |
| 추론 | 38.0 | -0.8 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.272727272727295%×1.0, [[humanitys-last-exam]] 3.47544022242817%×1.0 |
| 코딩 | 34.9 | -1.01 | 실측 | [[terminal-bench]] 6.81818181818182%×0.5 |
| 에이전트 | 34.5 | -1.03 | 실측 | [[tau2-bench]] 19.5906432748538%×1.0, [[terminal-bench]] 6.81818181818182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 24.2 | -1.72 | 실측 | [[mmmu-pro]] 42.7745664739884%×1.0 |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 30.7 | -1.28 | 실측 | [[ifbench]] 28.6394557823129%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
