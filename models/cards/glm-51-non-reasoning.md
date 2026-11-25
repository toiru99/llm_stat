---
type: Model
title: GLM-5.1 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.965
output_speed_tps: 58.998253623528946
context_window: 200000
status: past
size_class: Large
params_b: 744
is_reasoning: false
radar:
  knowledge: { s: 64.7, z: 0.87, r: 63.1, estimated: false }  # 전문 지식
  reasoning: { s: 40.8, z: 0.28, r: 54.2, estimated: false }  # 추론
  coding: { s: 54.0, z: 0.44, r: 56.6, estimated: false }  # 코딩
  agentic: { s: 76.0, z: 1.02, r: 65.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 60.2, z: 0.07, r: 51.1, estimated: false }  # 긴문맥
  instruction: { s: 56.0, z: 0.23, r: 53.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.1 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GLM-5.1 (non-reasoning)

Z AI · Open · Large(744B) · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $1.285 · 출력 $4.07 · 혼합 $0.965/1M · 58.998253623528946 t/s · TTFT 12.576445807458269s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 63.1 | +0.87 | 실측 | [[gpqa-diamond]] 83.9394%×0.4, [[humanitys-last-exam]] 27.9425%×0.3 |
| 추론 | 54.2 | +0.28 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 83.9394%×1.0, [[humanitys-last-exam]] 27.9425%×1.0 |
| 코딩 | 56.6 | +0.44 | 실측 | [[terminal-bench]] 35.6061%×0.5 |
| 에이전트 | 65.3 | +1.02 | 실측 | [[tau2-bench]] 97.076%×1.0, [[terminal-bench]] 35.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.1 | +0.07 | 실측 | [[aa-lcr]] 53.3333%×1.0 |
| 지시 따르기 | 53.4 | +0.23 | 실측 | [[ifbench]] 51.9728%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
